<!DOCTYPE html>
<!--[if IE]><![endif]-->
<html>

    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <title>Enum DiscordIntents
 | DisCatSharp Docs </title>
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
      <meta name="generator" content="docfx 2.60.0.0">
  
    <meta name="og:type" content="website">
    <meta name="og:image" content="https://cdn.aitsys.dev/file/data/kmjpa6f64me66dsm7dz3/PHID-FILE-degpfzd7nbw2q5yko5j7/logobig.png">
    <meta name="og:image:alt" content="DisCatSharp Logo">
    <meta name="og:image:type" content="image/png">
    <meta name="og:site_name" content="DisCatSharp Documentation">
    <link rel="apple-touch-icon" sizes="57x57" href="../../apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="../../apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="../../apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="../../apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="../../apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="../../apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="../../apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="../../apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="../../apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="../../android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../../favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="../../favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../../favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="../../ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
      <link rel="shortcut icon" href="../../favicon.ico">
      <script defer="" src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "de6c22ce0b3e4c17bb78c8c31b4e695b"}'></script>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/night-owl.min.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" integrity="sha384-EvBWSlnoFgZlXJvpzS+MAUEjvN7+gcCwH+qh7GRFOGgZO0PuwOFro7qPOJnLfe7l" crossorigin="anonymous">
      <link rel="stylesheet" href="../../src/styles/config.css">
      <link rel="stylesheet" href="../../src/styles/discord.css">
      <link rel="stylesheet" href="../../src/styles/dcs.css">
      <link rel="stylesheet" href="../../src/styles/main.css">
      <link rel="stylesheet" href="../../src/styles/colors.css">
      <link rel="stylesheet" href="../../src/styles/highlight/github-dark.min.css">
      <meta property="docfx:navrel" content="../../toc.html">
      <meta property="docfx:tocrel" content="toc.html">
  
  <meta property="docfx:rel" content="../../">
  <meta property="docfx:newtab" content="true">
    </head>

    <body>
        <div class="top-navbar">
            <a class="burger-icon" onclick="toggleMenu()">
                <svg name="Hamburger" style="vertical-align: middle;" width="34" height="34" viewbox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M20 6H4V9H20V6ZM4 10.999H20V13.999H4V10.999ZM4 15.999H20V18.999H4V15.999Z"></path></svg>
            </a>


            <a class="navbar-brand" href="../../index.html">
              <img id="logo" class="svg" src="../../dcs-logo-winter.gif" alt="DisCatSharp">
            </a>
        </div>

        <div class="body-content">
            <div id="blackout" class="blackout" onclick="toggleMenu()"></div>

            <nav id="sidebar" role="navigation">
                <div class="sidebar">

                    <div>
                      <div class="mobile-hide">

                        <a class="navbar-brand" href="../../index.html">
                          <img id="logo" class="svg" src="../../dcs-logo-winter.gif" alt="DisCatSharp">
                        </a>
                      </div>

                      <div class="sidesearch">
                        <form id="search" role="search" class="search">
                            <i class="bi bi-search search-icon"></i>
                            <input type="text" id="search-query" placeholder="Search" autocomplete="off">
                        </form>
                      </div>

                      <div id="navbar">
                      </div>
                    </div>
                    <div class="sidebar-item-separator"></div>

                        <div id="sidetoggle">
                          <div id="sidetoc"></div>
                        </div>
                </div>
                <div class="footer">
  <strong>Made with ♥ by AITSYS</strong>
  
                </div>
            </nav>

            <main class="main-panel">

                <div id="search-results" style="display: none;">
                  <h1 class="search-list">Search Results for <span></span></h1>
                  <div class="sr-items">
                    <p class="lsearch"><i class="bi bi-hourglass-split index-loading"></i></p>
                  </div>
                  <ul id="pagination" data-first="First" data-prev="Previous" data-next="Next" data-last="Last"></ul>
                </div>

                <div role="main" class="hide-when-search">

                        <div class="subnav navbar navbar-default">
                          <div class="container hide-when-search" id="breadcrumb">
                            <ul class="breadcrumb">
                              <li></li>
                            </ul>
                          </div>
                        </div>

      <div id="sidetoggle">
        <div id="sidetoc"></div>
      </div>
						<div class="article row grid-right">

                    <article class="content wrap" id="_content" data-uid="DisCatSharp.Enums.DiscordIntents">


  <h1 id="DisCatSharp_Enums_DiscordIntents" data-uid="DisCatSharp.Enums.DiscordIntents" class="text-break">Enum DiscordIntents
</h1>
  <div class="markdown level0 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Enums.DiscordIntents.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Represents gateway intents to be specified for connecting to Discord.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <h6><strong>Namespace</strong>: <a class="xref" href="DisCatSharp.Enums.html">DisCatSharp.Enums</a></h6>
  <h6><strong>Assembly</strong>: DisCatSharp.dll</h6>
  <h5 id="DisCatSharp_Enums_DiscordIntents_syntax">Syntax</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public enum DiscordIntents : int</code></pre>
  </div>
  <h3 id="fields">Fields
</h3>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    <thead>
    <tbody>
      <tr>
        <td id="DisCatSharp_Enums_DiscordIntents_All">All</td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Enums.DiscordIntents.yml" sourcestartlinenumber="2" sourceendlinenumber="4">Includes all intents.
<p>The <a class="xref" href="DisCatSharp.Enums.DiscordIntents.html#DisCatSharp_Enums_DiscordIntents_GuildMembers">GuildMembers</a>, <a class="xref" href="DisCatSharp.Enums.DiscordIntents.html#DisCatSharp_Enums_DiscordIntents_GuildPresences">GuildPresences</a> and <a class="xref" href="DisCatSharp.Enums.DiscordIntents.html#DisCatSharp_Enums_DiscordIntents_MessageContent">MessageContent</a> intents are privileged, and must be enabled on the bot&apos;s developer page.</p>
<p>The <a class="xref" href="DisCatSharp.Enums.DiscordIntents.html#DisCatSharp_Enums_DiscordIntents_MessageContent">MessageContent</a> exist only in v10.</p>
</td>
      </tr>
      <tr>
        <td id="DisCatSharp_Enums_DiscordIntents_AllUnprivileged">AllUnprivileged</td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Enums.DiscordIntents.yml" sourcestartlinenumber="2" sourceendlinenumber="4">Includes all unprivileged intents.
<p>These are all intents excluding <a class="xref" href="DisCatSharp.Enums.DiscordIntents.html#DisCatSharp_Enums_DiscordIntents_GuildMembers">GuildMembers</a> and <a class="xref" href="DisCatSharp.Enums.DiscordIntents.html#DisCatSharp_Enums_DiscordIntents_GuildPresences">GuildPresences</a>.</p>
<p>The <a class="xref" href="DisCatSharp.Enums.DiscordIntents.html#DisCatSharp_Enums_DiscordIntents_GuildMessages">GuildMessages</a> will be excluded as of April 2022.</p>
</td>
      </tr>
      <tr>
        <td id="DisCatSharp_Enums_DiscordIntents_AllV9Less">AllV9Less</td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Enums.DiscordIntents.yml" sourcestartlinenumber="2" sourceendlinenumber="4">Includes all intents.
<p>The <a class="xref" href="DisCatSharp.Enums.DiscordIntents.html#DisCatSharp_Enums_DiscordIntents_GuildMembers">GuildMembers</a> and <a class="xref" href="DisCatSharp.Enums.DiscordIntents.html#DisCatSharp_Enums_DiscordIntents_GuildPresences">GuildPresences</a> intents are privileged, and must be enabled on the bot&apos;s developer page.</p>
<p>The <a class="xref" href="DisCatSharp.Enums.DiscordIntents.html#DisCatSharp_Enums_DiscordIntents_MessageContent">MessageContent</a> exist only in v10 and is removed here.</p>
</td>
      </tr>
      <tr>
        <td id="DisCatSharp_Enums_DiscordIntents_AutoModerationConfiguration">AutoModerationConfiguration</td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Enums.DiscordIntents.yml" sourcestartlinenumber="2" sourceendlinenumber="3">Whether to include automod configuration events.
<p>These include <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_AutomodRuleCreated">AutomodRuleCreated</a>, <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_AutomodRuleUpdated">AutomodRuleUpdated</a> and <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_AutomodRuleDeleted">AutomodRuleDeleted</a>.</p>
</td>
      </tr>
      <tr>
        <td id="DisCatSharp_Enums_DiscordIntents_AutoModerationExecution">AutoModerationExecution</td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Enums.DiscordIntents.yml" sourcestartlinenumber="2" sourceendlinenumber="3">Whether to include automod execution events.
<p>These includes <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_AutomodActionExecuted">AutomodActionExecuted</a>.</p>
</td>
      </tr>
      <tr>
        <td id="DisCatSharp_Enums_DiscordIntents_DirectMessageReactions">DirectMessageReactions</td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Enums.DiscordIntents.yml" sourcestartlinenumber="2" sourceendlinenumber="5">Whether to include direct message reaction events.
<p>These include <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_MessageReactionAdded">MessageReactionAdded</a>, <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_MessageReactionRemoved">MessageReactionRemoved</a>,</p>
<p><a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_MessageReactionsCleared">MessageReactionsCleared</a> and <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_MessageReactionRemovedEmoji">MessageReactionRemovedEmoji</a>.</p>
<p>These events only fire for DM channels.</p>
</td>
      </tr>
      <tr>
        <td id="DisCatSharp_Enums_DiscordIntents_DirectMessages">DirectMessages</td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Enums.DiscordIntents.yml" sourcestartlinenumber="2" sourceendlinenumber="5">Whether to include general direct message events.
<p>These include <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_ChannelCreated">ChannelCreated</a>, <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_MessageCreated">MessageCreated</a>, <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_MessageUpdated">MessageUpdated</a>,</p>
<p><a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_MessageDeleted">MessageDeleted</a> and <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_ChannelPinsUpdated">ChannelPinsUpdated</a>.</p>
<p>These events only fire for DM channels.</p>
</td>
      </tr>
      <tr>
        <td id="DisCatSharp_Enums_DiscordIntents_DirectMessageTyping">DirectMessageTyping</td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Enums.DiscordIntents.yml" sourcestartlinenumber="2" sourceendlinenumber="4">Whether to include direct message typing events.
<p>This includes <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_TypingStarted">TypingStarted</a>.</p>
<p>This event only fires for DM channels.</p>
</td>
      </tr>
      <tr>
        <td id="DisCatSharp_Enums_DiscordIntents_GuildBans">GuildBans</td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Enums.DiscordIntents.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Represents gateway intents to be specified for connecting to Discord.</p>
</td>
      </tr>
      <tr>
        <td id="DisCatSharp_Enums_DiscordIntents_GuildEmojisAndStickers">GuildEmojisAndStickers</td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Enums.DiscordIntents.yml" sourcestartlinenumber="2" sourceendlinenumber="3">Whether to include guild emoji and sticker events.
<p>This includes <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_GuildEmojisUpdated">GuildEmojisUpdated</a> and <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_GuildStickersUpdated">GuildStickersUpdated</a>.</p>
</td>
      </tr>
      <tr>
        <td id="DisCatSharp_Enums_DiscordIntents_GuildIntegrations">GuildIntegrations</td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Enums.DiscordIntents.yml" sourcestartlinenumber="2" sourceendlinenumber="3">Whether to include guild integration events.
<p>This includes <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_GuildIntegrationsUpdated">GuildIntegrationsUpdated</a>.</p>
</td>
      </tr>
      <tr>
        <td id="DisCatSharp_Enums_DiscordIntents_GuildInvites">GuildInvites</td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Enums.DiscordIntents.yml" sourcestartlinenumber="2" sourceendlinenumber="3">Whether to include guild invite events.
<p>These include <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_InviteCreated">InviteCreated</a> and <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_InviteDeleted">InviteDeleted</a>.</p>
</td>
      </tr>
      <tr>
        <td id="DisCatSharp_Enums_DiscordIntents_GuildMembers">GuildMembers</td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Enums.DiscordIntents.yml" sourcestartlinenumber="2" sourceendlinenumber="4">Whether to include guild member events.
<p>These include <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_GuildMemberAdded">GuildMemberAdded</a>, <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_GuildMemberUpdated">GuildMemberUpdated</a>, <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_GuildMemberRemoved">GuildMemberRemoved</a> and <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_ThreadMembersUpdated">ThreadMembersUpdated</a>.</p>
<p>This is a privileged intent, and must be enabled on the bot&apos;s developer page.</p>
</td>
      </tr>
      <tr>
        <td id="DisCatSharp_Enums_DiscordIntents_GuildMessageReactions">GuildMessageReactions</td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Enums.DiscordIntents.yml" sourcestartlinenumber="2" sourceendlinenumber="4">Whether to include guild reaction events.
<p>These include <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_MessageReactionAdded">MessageReactionAdded</a>, <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_MessageReactionRemoved">MessageReactionRemoved</a>, <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_MessageReactionsCleared">MessageReactionsCleared</a></p>
<p>and <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_MessageReactionRemovedEmoji">MessageReactionRemovedEmoji</a>.</p>
</td>
      </tr>
      <tr>
        <td id="DisCatSharp_Enums_DiscordIntents_GuildMessages">GuildMessages</td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Enums.DiscordIntents.yml" sourcestartlinenumber="2" sourceendlinenumber="4">Whether to include guild message events. Note that you may receive empty contents if you don&apos;t have the message content intent.
You can enable it in the developer portal. If you have a verified bot, you might need to apply for the intent.
<p>These include <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_MessageCreated">MessageCreated</a>, <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_MessageUpdated">MessageUpdated</a>, and <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_MessageDeleted">MessageDeleted</a>.</p>
</td>
      </tr>
      <tr>
        <td id="DisCatSharp_Enums_DiscordIntents_GuildMessageTyping">GuildMessageTyping</td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Enums.DiscordIntents.yml" sourcestartlinenumber="2" sourceendlinenumber="3">Whether to include guild typing events.
<p>These include <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_TypingStarted">TypingStarted</a>.</p>
</td>
      </tr>
      <tr>
        <td id="DisCatSharp_Enums_DiscordIntents_GuildModeration">GuildModeration</td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Enums.DiscordIntents.yml" sourcestartlinenumber="2" sourceendlinenumber="3">Whether to include guild ban events.
<p>These include <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_GuildBanAdded">GuildBanAdded</a>, <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_GuildBanRemoved">GuildBanRemoved</a> and <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_GuildAuditLogEntryCreated">GuildAuditLogEntryCreated</a>.</p>
</td>
      </tr>
      <tr>
        <td id="DisCatSharp_Enums_DiscordIntents_GuildPresences">GuildPresences</td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Enums.DiscordIntents.yml" sourcestartlinenumber="2" sourceendlinenumber="4">Whether to include guild presence events.
<p>This includes <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_PresenceUpdated">PresenceUpdated</a>.</p>
<p>This is a privileged intent, and must be enabled on the bot&apos;s developer page.</p>
</td>
      </tr>
      <tr>
        <td id="DisCatSharp_Enums_DiscordIntents_Guilds">Guilds</td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Enums.DiscordIntents.yml" sourcestartlinenumber="2" sourceendlinenumber="8">Whether to include general guild events. Note that you may receive empty message contents if you don&apos;t have the message content intent.
<p>These include <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_GuildCreated">GuildCreated</a>, <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_GuildDeleted">GuildDeleted</a>, <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_GuildAvailable">GuildAvailable</a>, <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_GuildDownloadCompleted">GuildDownloadCompleted</a>,</p>
<p><a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_GuildRoleCreated">GuildRoleCreated</a>, <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_GuildRoleUpdated">GuildRoleUpdated</a>, <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_GuildRoleDeleted">GuildRoleDeleted</a>,</p>
<p><a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_ChannelCreated">ChannelCreated</a>, <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_ChannelUpdated">ChannelUpdated</a>, <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_ChannelDeleted">ChannelDeleted</a>, <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_ChannelPinsUpdated">ChannelPinsUpdated</a>,</p>
<p><a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_StageInstanceCreated">StageInstanceCreated</a>, <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_StageInstanceUpdated">StageInstanceUpdated</a>, <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_StageInstanceDeleted">StageInstanceDeleted</a>,</p>
<p><a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_ThreadCreated">ThreadCreated</a>, <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_ThreadUpdated">ThreadUpdated</a>, <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_ThreadDeleted">ThreadDeleted</a>,</p>
<p><a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_ThreadListSynced">ThreadListSynced</a>, <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_ThreadMemberUpdated">ThreadMemberUpdated</a> and <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_ThreadMembersUpdated">ThreadMembersUpdated</a>.</p>
</td>
      </tr>
      <tr>
        <td id="DisCatSharp_Enums_DiscordIntents_GuildScheduledEvents">GuildScheduledEvents</td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Enums.DiscordIntents.yml" sourcestartlinenumber="2" sourceendlinenumber="4">Whether to include guild scheduled event events.
<p>These include <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_GuildScheduledEventCreated">GuildScheduledEventCreated</a>, <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_GuildScheduledEventUpdated">GuildScheduledEventUpdated</a>, <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_GuildScheduledEventDeleted">GuildScheduledEventDeleted</a>,</p>
<p><a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_GuildScheduledEventUserAdded">GuildScheduledEventUserAdded</a> and <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_GuildScheduledEventUserRemoved">GuildScheduledEventUserRemoved</a>.</p>
</td>
      </tr>
      <tr>
        <td id="DisCatSharp_Enums_DiscordIntents_GuildVoiceStates">GuildVoiceStates</td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Enums.DiscordIntents.yml" sourcestartlinenumber="2" sourceendlinenumber="3">Whether to include guild voice state events.
<p>This includes <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_VoiceStateUpdated">VoiceStateUpdated</a>.</p>
</td>
      </tr>
      <tr>
        <td id="DisCatSharp_Enums_DiscordIntents_GuildWebhooks">GuildWebhooks</td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Enums.DiscordIntents.yml" sourcestartlinenumber="2" sourceendlinenumber="3">Whether to include guild webhook events.
<p>This includes <a class="xref" href="DisCatSharp.DiscordClient.html#DisCatSharp_DiscordClient_WebhooksUpdated">WebhooksUpdated</a>.</p>
</td>
      </tr>
      <tr>
        <td id="DisCatSharp_Enums_DiscordIntents_MessageContent">MessageContent</td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Enums.DiscordIntents.yml" sourcestartlinenumber="2" sourceendlinenumber="3">Whether to include the content of guild messages.
See <a href="https://support-dev.discord.com/hc/en-us/articles/4404772028055-Message-Content-Privileged-Intent-for-Verified-Bots" data-raw-source="https://support-dev.discord.com/hc/en-us/articles/4404772028055-Message-Content-Privileged-Intent-for-Verified-Bots" sourcefile="api/DisCatSharp/DisCatSharp.Enums.DiscordIntents.yml" sourcestartlinenumber="3" sourceendlinenumber="3">https://support-dev.discord.com/hc/en-us/articles/4404772028055-Message-Content-Privileged-Intent-for-Verified-Bots</a> for more information.</p>
</td>
      </tr>
    </tbody>
  </thead></thead></table>
  <h3 id="extensionmethods">Extension Methods</h3>
  <div>
      <a class="xref" href="DisCatSharp.Enums.DiscordIntentExtensions.html#DisCatSharp_Enums_DiscordIntentExtensions_HasIntent_DisCatSharp_Enums_DiscordIntents_DisCatSharp_Enums_DiscordIntents_">DiscordIntentExtensions.HasIntent(DiscordIntents)</a>
  </div>
  <div>
      <a class="xref" href="DisCatSharp.Enums.DiscordIntentExtensions.html#DisCatSharp_Enums_DiscordIntentExtensions_AddIntent_DisCatSharp_Enums_DiscordIntents_DisCatSharp_Enums_DiscordIntents_">DiscordIntentExtensions.AddIntent(DiscordIntents)</a>
  </div>
  <div>
      <a class="xref" href="DisCatSharp.Enums.DiscordIntentExtensions.html#DisCatSharp_Enums_DiscordIntentExtensions_RemoveIntent_DisCatSharp_Enums_DiscordIntents_DisCatSharp_Enums_DiscordIntents_">DiscordIntentExtensions.RemoveIntent(DiscordIntents)</a>
  </div>

</article>
                </div>

                <div class="copyright-footer">
                    <span>&#169; Aiko IT Systems. All rights reserved.</span>
                </div>
            </div></main>
        </div>


        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
        <script type="text/javascript" src="../../src/scripts/docfx.vendor.js"></script>
        <script type="text/javascript" src="../../src/scripts/docfx.js"></script>
        <script type="text/javascript" src="../../src/scripts/url.min.js"></script>
        <script type="text/javascript" src="../../src/scripts/highlight/highlight.min.js"></script>
        <script>hljs.highlightAll();</script>
        <script src="https://cdn.jsdelivr.net/npm/anchor-js/anchor.min.js"></script>
        <script type="text/javascript" src="../../src/scripts/jquery.twbsPagination.js"></script>
        <script type="text/javascript" src="../../src/scripts/dcs.js"></script>
        <script type="text/javascript" src="../../src/scripts/lunr.js"></script>
    </body>
</html>