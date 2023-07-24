// This file is part of the DisCatSharp project, based off DSharpPlus.
//
// Copyright (c) 2021-2023 AITSYS
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
// FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

using System.Collections.Generic;
using System.Linq;

using Newtonsoft.Json;

namespace DisCatSharp.Entities;

/// <summary>
/// Represents a discord thread result.
/// </summary>
public class DiscordThreadResult : ObservableApiObject
{
	/// <summary>
	/// Gets the returned threads.
	/// </summary>
	[JsonIgnore]
	public Dictionary<ulong, DiscordThreadChannel> ReturnedThreads
		=> this.Threads == null || !this.Threads.Any() ? new() : this.Threads.Select(t => new { t.Id, t }).ToDictionary(t => t.Id, t => t.t);
	[JsonProperty("threads", NullValueHandling = NullValueHandling.Ignore)]
	internal List<DiscordThreadChannel> Threads { get; set; }

	/// <summary>
	/// Gets the active members.
	/// </summary>
	[JsonProperty("members", NullValueHandling = NullValueHandling.Ignore)]
	public List<DiscordThreadChannelMember> ActiveMembers { get; internal set; }

	/// <summary>
	/// Whether there are more results.
	/// </summary>
	[JsonProperty("has_more")]
	public bool HasMore { get; internal set; }

	/// <summary>
	/// Initializes a new instance of the <see cref="DiscordThreadResult"/> class.
	/// </summary>
	internal DiscordThreadResult()
		: base()
	{ }
}
