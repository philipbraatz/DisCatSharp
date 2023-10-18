using System.Linq;

using DisCatSharp.Enums;

namespace DisCatSharp.Entities;

/// <summary>
/// Represents a change set for disconnecting a member from a voice channel.
/// </summary>
public sealed class MemberDisconnectChangeSet : DiscordAuditLogEntry
{
	internal MemberDisconnectChangeSet()
	{
		this.ValidFor = AuditLogActionType.MemberDisconnect;
	}

	public int Count => (int)this.Changes.FirstOrDefault(x => x.Key == "count")?.OldValue;
}
