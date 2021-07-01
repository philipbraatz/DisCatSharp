// This file is part of the DSharpPlus project.
//
// Copyright (c) 2015 Mike Santiago
// Copyright (c) 2016-2021 DSharpPlus Contributors
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using DSharpPlusNextGen.Exceptions;
using Newtonsoft.Json;

namespace DSharpPlusNextGen.Entities
{
    /// <summary>
    /// Represents a Discord Sticker.
    /// </summary>
    public class DiscordSticker : SnowflakeObject, IEquatable<DiscordSticker>
    {
        /// <summary>
        /// Gets the Pack ID of this sticker.
        /// </summary>
        [JsonProperty("pack_id")]
        public ulong PackId { get; internal set; }

        /// <summary>
        /// Gets the Name of the sticker.
        /// </summary>
        [JsonProperty("name")]
        public string Name { get; internal set; }

        /// <summary>
        /// Gets the Description of the sticker.
        /// </summary>
        [JsonProperty("description")]
        public string Description { get; internal set; }

        /// <summary>
        /// Gets the type of sticker.
        /// </summary>
        [JsonProperty("type")]
        public StickerType Type { get; internal set; }

        /// <summary>
        /// For guild stickers, gets the user that made the sticker.
        /// </summary>
        [JsonProperty("user")]
        public DiscordUser User { get; internal set; }

        /// <summary>
        /// Gets the guild associated with this sticker, if any.
        /// </summary>
        public DiscordGuild Guild => (this.Discord as DiscordClient).InternalGetCachedGuild(this.GuildId);

        [JsonProperty("guild_id")]
        internal ulong? GuildId { get; set; }

        /// <summary>
        /// Gets whether this sticker is available. Only applicable to guild stickers.
        /// </summary>
        [JsonProperty("available")]
        public bool Available { get; internal set; }

        /// <summary>
        /// Gets the sticker's sort order, if it's in a pack.
        /// </summary>
        [JsonProperty("sort_value")]
        public int SortValue { get; internal set; }

        /// <summary>
        /// Gets the list of tags for the sticker.
        /// </summary>
        [JsonIgnore]
        public IEnumerable<string> Tags
            => this._internalTags != null ? this._internalTags.Split(',') : Array.Empty<string>();

        /// <summary>
        /// Gets the asset hash of the sticker.
        /// </summary>
        [JsonProperty("asset")]
        public string Asset { get; internal set; }

        /// <summary>
        /// Gets the preview asset hash of the sticker.
        /// </summary>
        [JsonProperty("preview_asset", NullValueHandling = NullValueHandling.Ignore)]
        public string PreviewAsset { get; internal set; }

        /// <summary>
        /// Gets the Format type of the sticker.
        /// </summary>
        [JsonProperty("format_type")]
        public StickerFormat FormatType { get; internal set; }

        [JsonProperty("tags", NullValueHandling = NullValueHandling.Ignore)]
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Style", "IDE1006:Naming Styles", Justification = "<Pending>")]
        private string _internalTags { get; set; }

        public bool Equals(DiscordSticker other) => this.Id == other.Id;

        public override string ToString() => $"Sticker {this.Id}; {this.Name}; {this.FormatType}";

        /// <summary>
        /// Modifies the sticker
        /// </summary>
        /// <param name="name">The name of the sticker</param>
        /// <param name="description">The description of the sticker</param>
        /// <param name="tags">The name of a unicode emoji representing the sticker's expression</param>
        /// <returns>A sticker object</returns>
        /// <exception cref="UnauthorizedException">Thrown when the sticker could not be found.</exception>
        /// <exception cref="UnauthorizedException">Thrown when the client does not have the <see cref="Permissions.ManageEmojisAndStickers"/> permission.</exception>
        /// <exception cref="ServerErrorException">Thrown when Discord is unable to process the request.</exception>
        /// <exception cref="ArgumentException">Sticker does not belong to a guild.</exception>
        public Task<DiscordSticker> ModifyAsync(Optional<string> name, Optional<string> description, Optional<string> tags)
        {
            return !this.GuildId.HasValue
                ? throw new ArgumentException("This sticker does not belong to a guild.")
                : name.HasValue && (name.Value.Length < 2 || name.Value.Length > 30)
                ? throw new ArgumentException("Sticker name needs to be between 2 and 30 characters long.")
                : description.HasValue && (description.Value.Length < 1 || description.Value.Length > 100)
                ? throw new ArgumentException("Sticker description needs to be between 1 and 100 characters long.")
                : tags.HasValue && !DiscordEmoji.TryFromUnicode(this.Discord, tags.Value, out var emoji)
                ? throw new ArgumentException("Sticker tags needs to be a unicode emoji.")
                : this.Discord.ApiClient.ModifyGuildStickerAsync(this.GuildId.Value, this.Id, name, description, tags);
        }

        /// <summary>
        /// Deletes the sticker
        /// </summary>
        /// <exception cref="UnauthorizedException">Thrown when the sticker could not be found.</exception>
        /// <exception cref="UnauthorizedException">Thrown when the client does not have the <see cref="Permissions.ManageEmojisAndStickers"/> permission.</exception>
        /// <exception cref="ServerErrorException">Thrown when Discord is unable to process the request.</exception>
        /// <exception cref="ArgumentException">Sticker does not belong to a guild.</exception>
        public Task DeleteAsync()
            => this.GuildId.HasValue ? this.Discord.ApiClient.DeleteGuildStickerAsync(this.GuildId.Value, this.Id) : throw new ArgumentException("The requested sticker is no guild sticker.");
    }

    public enum StickerType
    {
        Standard = 1,
        Guild = 2
    }

    public enum StickerFormat
    {
        PNG = 1,
        APNG = 2,
        LOTTIE = 3
    }
}