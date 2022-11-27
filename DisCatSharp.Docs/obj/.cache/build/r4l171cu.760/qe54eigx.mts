<!DOCTYPE html>
<!--[if IE]><![endif]-->
<html>

    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <title>Class DiscordMessage
 | DisCatSharp Docs </title>
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
      <meta name="title" content="Class DiscordMessage
 | DisCatSharp Docs ">
      <meta name="og:title" content="Class DiscordMessage
 | DisCatSharp Docs ">
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
              <img id="logo" class="svg" src="../../logo.png" alt="DisCatSharp">
            </a>
        </div>

        <div class="body-content">
            <div id="blackout" class="blackout" onclick="toggleMenu()"></div>

            <nav id="sidebar" role="navigation">
                <div class="sidebar">

                    <div>
                      <div class="mobile-hide">

                        <a class="navbar-brand" href="../../index.html">
                          <img id="logo" class="svg" src="../../logo.png" alt="DisCatSharp">
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

                    <article class="content wrap" id="_content" data-uid="DisCatSharp.Entities.DiscordMessage">


  <h1 id="DisCatSharp_Entities_DiscordMessage" data-uid="DisCatSharp.Entities.DiscordMessage" class="text-break">Class DiscordMessage
</h1>
  <div class="markdown level0 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Represents a Discord text message.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">Object</a></div>
    <div class="level1"><a class="xref" href="DisCatSharp.Entities.SnowflakeObject.html">SnowflakeObject</a></div>
    <div class="level2"><span class="xref">DiscordMessage</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><span class="xref">IEquatable</span>&lt;<a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a>&gt;</div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="DisCatSharp.Entities.SnowflakeObject.html#DisCatSharp_Entities_SnowflakeObject_Id">SnowflakeObject.Id</a>
    </div>
    <div>
      <a class="xref" href="DisCatSharp.Entities.SnowflakeObject.html#DisCatSharp_Entities_SnowflakeObject_CreationTimestamp">SnowflakeObject.CreationTimestamp</a>
    </div>
  </div>
  <h6><strong>Namespace</strong>: <a class="xref" href="DisCatSharp.Entities.html">DisCatSharp.Entities</a></h6>
  <h6><strong>Assembly</strong>: DisCatSharp.dll</h6>
  <h5 id="DisCatSharp_Entities_DiscordMessage_syntax">Syntax</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public class DiscordMessage : SnowflakeObject</code></pre>
  </div>
  <h3 id="properties">Properties
</h3>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_Activity.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.Activity%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L307">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_Activity_" data-uid="DisCatSharp.Entities.DiscordMessage.Activity*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_Activity" data-uid="DisCatSharp.Entities.DiscordMessage.Activity">Activity</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets the message activity in the Rich Presence embed.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public DiscordMessageActivity Activity { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="DisCatSharp.Entities.DiscordMessageActivity.html">DiscordMessageActivity</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_Application.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.Application%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L313">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_Application_" data-uid="DisCatSharp.Entities.DiscordMessage.Application*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_Application" data-uid="DisCatSharp.Entities.DiscordMessage.Application">Application</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets the message application in the Rich Presence embed.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public DiscordMessageApplication Application { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="DisCatSharp.Entities.DiscordMessageApplication.html">DiscordMessageApplication</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_ApplicationId.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.ApplicationId%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L319">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_ApplicationId_" data-uid="DisCatSharp.Entities.DiscordMessage.ApplicationId*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_ApplicationId" data-uid="DisCatSharp.Entities.DiscordMessage.ApplicationId">ApplicationId</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets the message application id in the Rich Presence embed.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public ulong ApplicationId { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.uint64">UInt64</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_Attachments.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.Attachments%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L246">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_Attachments_" data-uid="DisCatSharp.Entities.DiscordMessage.Attachments*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_Attachments" data-uid="DisCatSharp.Entities.DiscordMessage.Attachments">Attachments</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets files attached to this message.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public IReadOnlyList&lt;DiscordAttachment&gt; Attachments { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">IReadOnlyList</span>&lt;<a class="xref" href="DisCatSharp.Entities.DiscordAttachment.html">DiscordAttachment</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_Author.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.Author%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L145">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_Author_" data-uid="DisCatSharp.Entities.DiscordMessage.Author*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_Author" data-uid="DisCatSharp.Entities.DiscordMessage.Author">Author</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets the user or member that sent the message.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public DiscordUser Author { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="DisCatSharp.Entities.DiscordUser.html">DiscordUser</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_Channel.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.Channel%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L109">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_Channel_" data-uid="DisCatSharp.Entities.DiscordMessage.Channel*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_Channel" data-uid="DisCatSharp.Entities.DiscordMessage.Channel">Channel</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets the channel in which the message was sent.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public DiscordChannel Channel { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="DisCatSharp.Entities.DiscordChannel.html">DiscordChannel</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_ChannelId.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.ChannelId%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L133">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_ChannelId_" data-uid="DisCatSharp.Entities.DiscordMessage.ChannelId*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_ChannelId" data-uid="DisCatSharp.Entities.DiscordMessage.ChannelId">ChannelId</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets the ID of the channel in which the message was sent.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public ulong ChannelId { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.uint64">UInt64</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_Components.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.Components%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L139">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_Components_" data-uid="DisCatSharp.Entities.DiscordMessage.Components*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_Components" data-uid="DisCatSharp.Entities.DiscordMessage.Components">Components</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets the components this message was sent with.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public IReadOnlyCollection&lt;DiscordActionRowComponent&gt; Components { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">IReadOnlyCollection</span>&lt;<a class="xref" href="DisCatSharp.Entities.DiscordActionRowComponent.html">DiscordActionRowComponent</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_Content.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.Content%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L151">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_Content_" data-uid="DisCatSharp.Entities.DiscordMessage.Content*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_Content" data-uid="DisCatSharp.Entities.DiscordMessage.Content">Content</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets the message&apos;s content.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public string Content { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">String</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_EditedTimestamp.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.EditedTimestamp%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L171">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_EditedTimestamp_" data-uid="DisCatSharp.Entities.DiscordMessage.EditedTimestamp*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_EditedTimestamp" data-uid="DisCatSharp.Entities.DiscordMessage.EditedTimestamp">EditedTimestamp</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets the message&apos;s edit timestamp. Will be null if the message was not edited.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public DateTimeOffset? EditedTimestamp { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.nullable-1">Nullable</a>&lt;<span class="xref">DateTimeOffset</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_Embeds.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.Embeds%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L258">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_Embeds_" data-uid="DisCatSharp.Entities.DiscordMessage.Embeds*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_Embeds" data-uid="DisCatSharp.Entities.DiscordMessage.Embeds">Embeds</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets embeds attached to this message.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public IReadOnlyList&lt;DiscordEmbed&gt; Embeds { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">IReadOnlyList</span>&lt;<a class="xref" href="DisCatSharp.Entities.DiscordEmbed.html">DiscordEmbed</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_Flags.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.Flags%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L338">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_Flags_" data-uid="DisCatSharp.Entities.DiscordMessage.Flags*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_Flags" data-uid="DisCatSharp.Entities.DiscordMessage.Flags">Flags</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets the bitwise flags for this message.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public MessageFlags? Flags { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.nullable-1">Nullable</a>&lt;<a class="xref" href="DisCatSharp.Enums.MessageFlags.html">MessageFlags</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_GuildId.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.GuildId%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L370">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_GuildId_" data-uid="DisCatSharp.Entities.DiscordMessage.GuildId*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_GuildId" data-uid="DisCatSharp.Entities.DiscordMessage.GuildId">GuildId</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets the guild id.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public ulong? GuildId { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.nullable-1">Nullable</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.uint64">UInt64</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_Interaction.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.Interaction%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L382">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_Interaction_" data-uid="DisCatSharp.Entities.DiscordMessage.Interaction*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_Interaction" data-uid="DisCatSharp.Entities.DiscordMessage.Interaction">Interaction</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets whether the message is a response to an interaction.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public DiscordMessageInteraction Interaction { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="DisCatSharp.Entities.DiscordMessageInteraction.html">DiscordMessageInteraction</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_IsEdited.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.IsEdited%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L185">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_IsEdited_" data-uid="DisCatSharp.Entities.DiscordMessage.IsEdited*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_IsEdited" data-uid="DisCatSharp.Entities.DiscordMessage.IsEdited">IsEdited</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets whether this message was edited.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public bool IsEdited { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">Boolean</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_IsTts.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.IsTts%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L192">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_IsTts_" data-uid="DisCatSharp.Entities.DiscordMessage.IsTts*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_IsTts" data-uid="DisCatSharp.Entities.DiscordMessage.IsTts">IsTts</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets whether the message is a text-to-speech message.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public bool IsTts { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">Boolean</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_JumpLink.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.JumpLink%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L351">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_JumpLink_" data-uid="DisCatSharp.Entities.DiscordMessage.JumpLink*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_JumpLink" data-uid="DisCatSharp.Entities.DiscordMessage.JumpLink">JumpLink</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets the jump link to this message.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public Uri JumpLink { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">Uri</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_MentionedChannels.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.MentionedChannels%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L234">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_MentionedChannels_" data-uid="DisCatSharp.Entities.DiscordMessage.MentionedChannels*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_MentionedChannels" data-uid="DisCatSharp.Entities.DiscordMessage.MentionedChannels">MentionedChannels</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets channels mentioned by this message.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public IReadOnlyList&lt;DiscordChannel&gt; MentionedChannels { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">IReadOnlyList</span>&lt;<a class="xref" href="DisCatSharp.Entities.DiscordChannel.html">DiscordChannel</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_MentionedRoles.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.MentionedRoles%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L218">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_MentionedRoles_" data-uid="DisCatSharp.Entities.DiscordMessage.MentionedRoles*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_MentionedRoles" data-uid="DisCatSharp.Entities.DiscordMessage.MentionedRoles">MentionedRoles</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets roles mentioned by this message.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public IReadOnlyList&lt;DiscordRole&gt; MentionedRoles { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">IReadOnlyList</span>&lt;<a class="xref" href="DisCatSharp.Entities.DiscordRole.html">DiscordRole</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_MentionedUsers.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.MentionedUsers%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L204">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_MentionedUsers_" data-uid="DisCatSharp.Entities.DiscordMessage.MentionedUsers*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_MentionedUsers" data-uid="DisCatSharp.Entities.DiscordMessage.MentionedUsers">MentionedUsers</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets users or members mentioned by this message.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public IReadOnlyList&lt;DiscordUser&gt; MentionedUsers { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">IReadOnlyList</span>&lt;<a class="xref" href="DisCatSharp.Entities.DiscordUser.html">DiscordUser</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_MentionEveryone.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.MentionEveryone%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L198">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_MentionEveryone_" data-uid="DisCatSharp.Entities.DiscordMessage.MentionEveryone*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_MentionEveryone" data-uid="DisCatSharp.Entities.DiscordMessage.MentionEveryone">MentionEveryone</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets whether the message mentions everyone.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public bool MentionEveryone { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">Boolean</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_MessageType.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.MessageType%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L301">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_MessageType_" data-uid="DisCatSharp.Entities.DiscordMessage.MessageType*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_MessageType" data-uid="DisCatSharp.Entities.DiscordMessage.MessageType">MessageType</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets the type of the message.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public MessageType? MessageType { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.nullable-1">Nullable</a>&lt;<a class="xref" href="DisCatSharp.Enums.MessageType.html">MessageType</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_Nonce.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.Nonce%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L282">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_Nonce_" data-uid="DisCatSharp.Entities.DiscordMessage.Nonce*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_Nonce" data-uid="DisCatSharp.Entities.DiscordMessage.Nonce">Nonce</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets the nonce sent with the message, if the message was sent by the client.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public string Nonce { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">String</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_Pinned.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.Pinned%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L289">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_Pinned_" data-uid="DisCatSharp.Entities.DiscordMessage.Pinned*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_Pinned" data-uid="DisCatSharp.Entities.DiscordMessage.Pinned">Pinned</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets whether the message is pinned.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public bool Pinned { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">Boolean</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_Reactions.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.Reactions%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L270">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_Reactions_" data-uid="DisCatSharp.Entities.DiscordMessage.Reactions*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_Reactions" data-uid="DisCatSharp.Entities.DiscordMessage.Reactions">Reactions</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets reactions used on this message.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public IReadOnlyList&lt;DiscordReaction&gt; Reactions { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">IReadOnlyList</span>&lt;<a class="xref" href="DisCatSharp.Entities.DiscordReaction.html">DiscordReaction</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_Reference.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.Reference%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L331">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_Reference_" data-uid="DisCatSharp.Entities.DiscordMessage.Reference*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_Reference" data-uid="DisCatSharp.Entities.DiscordMessage.Reference">Reference</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets the original message reference from the crossposted message.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public DiscordMessageReference Reference { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="DisCatSharp.Entities.DiscordMessageReference.html">DiscordMessageReference</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_ReferencedMessage.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.ReferencedMessage%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L376">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_ReferencedMessage_" data-uid="DisCatSharp.Entities.DiscordMessage.ReferencedMessage*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_ReferencedMessage" data-uid="DisCatSharp.Entities.DiscordMessage.ReferencedMessage">ReferencedMessage</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets the message object for the referenced message</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public DiscordMessage ReferencedMessage { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_Stickers.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.Stickers%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L358">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_Stickers_" data-uid="DisCatSharp.Entities.DiscordMessage.Stickers*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_Stickers" data-uid="DisCatSharp.Entities.DiscordMessage.Stickers">Stickers</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets stickers for this message.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public IReadOnlyList&lt;DiscordSticker&gt; Stickers { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">IReadOnlyList</span>&lt;<a class="xref" href="DisCatSharp.Entities.DiscordSticker.html">DiscordSticker</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_Thread.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.Thread%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L388">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_Thread_" data-uid="DisCatSharp.Entities.DiscordMessage.Thread*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_Thread" data-uid="DisCatSharp.Entities.DiscordMessage.Thread">Thread</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets the thread that was started from this message.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public DiscordThreadChannel Thread { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="DisCatSharp.Entities.DiscordThreadChannel.html">DiscordThreadChannel</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_Timestamp.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.Timestamp%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L157">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_Timestamp_" data-uid="DisCatSharp.Entities.DiscordMessage.Timestamp*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_Timestamp" data-uid="DisCatSharp.Entities.DiscordMessage.Timestamp">Timestamp</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets the message&apos;s creation timestamp.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public DateTimeOffset Timestamp { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">DateTimeOffset</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_WebhookId.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.WebhookId%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L295">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_WebhookId_" data-uid="DisCatSharp.Entities.DiscordMessage.WebhookId*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_WebhookId" data-uid="DisCatSharp.Entities.DiscordMessage.WebhookId">WebhookId</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets the id of the webhook that generated this message.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public ulong? WebhookId { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.nullable-1">Nullable</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.uint64">UInt64</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_WebhookMessage.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.WebhookMessage%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L344">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_WebhookMessage_" data-uid="DisCatSharp.Entities.DiscordMessage.WebhookMessage*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_WebhookMessage" data-uid="DisCatSharp.Entities.DiscordMessage.WebhookMessage">WebhookMessage</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets whether the message originated from a webhook.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public bool WebhookMessage { get; }</code></pre>
  </div>
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">Boolean</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_ClearAttachmentsAsync.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.ClearAttachmentsAsync%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L637">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_ClearAttachmentsAsync_" data-uid="DisCatSharp.Entities.DiscordMessage.ClearAttachmentsAsync*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_ClearAttachmentsAsync" data-uid="DisCatSharp.Entities.DiscordMessage.ClearAttachmentsAsync">ClearAttachmentsAsync()</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Clears all attachments from the message.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public Task&lt;DiscordMessage&gt; ClearAttachmentsAsync()</code></pre>
  </div>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">Task</span>&lt;<a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_CreateReactionAsync_DisCatSharp_Entities_DiscordEmoji_.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.CreateReactionAsync(DisCatSharp.Entities.DiscordEmoji)%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L872">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_CreateReactionAsync_" data-uid="DisCatSharp.Entities.DiscordMessage.CreateReactionAsync*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_CreateReactionAsync_DisCatSharp_Entities_DiscordEmoji_" data-uid="DisCatSharp.Entities.DiscordMessage.CreateReactionAsync(DisCatSharp.Entities.DiscordEmoji)">CreateReactionAsync(DiscordEmoji)</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Creates a reaction to this message.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public Task CreateReactionAsync(DiscordEmoji emoji)</code></pre>
  </div>
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="DisCatSharp.Entities.DiscordEmoji.html">DiscordEmoji</a></td>
        <td><span class="parametername">emoji</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">The emoji you want to react with, either an emoji or name:id</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">Task</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_CreateThreadAsync_System_String_DisCatSharp_Enums_ThreadAutoArchiveDuration_System_Nullable_System_Int32__System_String_.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.CreateThreadAsync(System.String%2CDisCatSharp.Enums.ThreadAutoArchiveDuration%2CSystem.Nullable%7BSystem.Int32%7D%2CSystem.String)%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L702">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_CreateThreadAsync_" data-uid="DisCatSharp.Entities.DiscordMessage.CreateThreadAsync*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_CreateThreadAsync_System_String_DisCatSharp_Enums_ThreadAutoArchiveDuration_System_Nullable_System_Int32__System_String_" data-uid="DisCatSharp.Entities.DiscordMessage.CreateThreadAsync(System.String,DisCatSharp.Enums.ThreadAutoArchiveDuration,System.Nullable{System.Int32},System.String)">CreateThreadAsync(String, ThreadAutoArchiveDuration, Nullable&lt;Int32&gt;, String)</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="3">Creates a thread.
Depending on the <a class="xref" href="DisCatSharp.Enums.ChannelType.html">ChannelType</a> of the parent channel it&apos;s either a <a class="xref" href="DisCatSharp.Enums.ChannelType.html#DisCatSharp_Enums_ChannelType_PublicThread">PublicThread</a> or a <a class="xref" href="DisCatSharp.Enums.ChannelType.html#DisCatSharp_Enums_ChannelType_NewsThread">NewsThread</a>.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public async Task&lt;DiscordThreadChannel&gt; CreateThreadAsync(string name, ThreadAutoArchiveDuration autoArchiveDuration = default(ThreadAutoArchiveDuration), int? rateLimitPerUser = null, string reason = null)</code></pre>
  </div>
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">String</a></td>
        <td><span class="parametername">name</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">The name of the thread.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="DisCatSharp.Enums.ThreadAutoArchiveDuration.html">ThreadAutoArchiveDuration</a></td>
        <td><span class="parametername">autoArchiveDuration</span></td>
        <td><a class="xref" href="DisCatSharp.Enums.ThreadAutoArchiveDuration.html">ThreadAutoArchiveDuration</a> till it gets archived. Defaults to <a class="xref" href="DisCatSharp.Enums.ThreadAutoArchiveDuration.html#DisCatSharp_Enums_ThreadAutoArchiveDuration_OneHour">OneHour</a></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.nullable-1">Nullable</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">Int32</a>&gt;</td>
        <td><span class="parametername">rateLimitPerUser</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">The per user ratelimit, aka slowdown.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">String</a></td>
        <td><span class="parametername">reason</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">The reason.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">Task</span>&lt;<a class="xref" href="DisCatSharp.Entities.DiscordThreadChannel.html">DiscordThreadChannel</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_DeleteAllReactionsAsync_System_String_.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.DeleteAllReactionsAsync(System.String)%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L950">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_DeleteAllReactionsAsync_" data-uid="DisCatSharp.Entities.DiscordMessage.DeleteAllReactionsAsync*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_DeleteAllReactionsAsync_System_String_" data-uid="DisCatSharp.Entities.DiscordMessage.DeleteAllReactionsAsync(System.String)">DeleteAllReactionsAsync(String)</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Deletes all reactions for this message.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public Task DeleteAllReactionsAsync(string reason = null)</code></pre>
  </div>
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">String</a></td>
        <td><span class="parametername">reason</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">Reason for audit logs.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">Task</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_DeleteAsync_System_String_.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.DeleteAsync(System.String)%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L677">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_DeleteAsync_" data-uid="DisCatSharp.Entities.DiscordMessage.DeleteAsync*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_DeleteAsync_System_String_" data-uid="DisCatSharp.Entities.DiscordMessage.DeleteAsync(System.String)">DeleteAsync(String)</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Deletes the message.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public Task DeleteAsync(string reason = null)</code></pre>
  </div>
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">String</a></td>
        <td><span class="parametername">reason</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">Task</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_DeleteOwnReactionAsync_DisCatSharp_Entities_DiscordEmoji_.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.DeleteOwnReactionAsync(DisCatSharp.Entities.DiscordEmoji)%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L890">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_DeleteOwnReactionAsync_" data-uid="DisCatSharp.Entities.DiscordMessage.DeleteOwnReactionAsync*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_DeleteOwnReactionAsync_DisCatSharp_Entities_DiscordEmoji_" data-uid="DisCatSharp.Entities.DiscordMessage.DeleteOwnReactionAsync(DisCatSharp.Entities.DiscordEmoji)">DeleteOwnReactionAsync(DiscordEmoji)</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Deletes your own reaction</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public Task DeleteOwnReactionAsync(DiscordEmoji emoji)</code></pre>
  </div>
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="DisCatSharp.Entities.DiscordEmoji.html">DiscordEmoji</a></td>
        <td><span class="parametername">emoji</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">Emoji for the reaction you want to remove, either an emoji or name:id</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">Task</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_DeleteReactionAsync_DisCatSharp_Entities_DiscordEmoji_DisCatSharp_Entities_DiscordUser_System_String_.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.DeleteReactionAsync(DisCatSharp.Entities.DiscordEmoji%2CDisCatSharp.Entities.DiscordUser%2CSystem.String)%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L911">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_DeleteReactionAsync_" data-uid="DisCatSharp.Entities.DiscordMessage.DeleteReactionAsync*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_DeleteReactionAsync_DisCatSharp_Entities_DiscordEmoji_DisCatSharp_Entities_DiscordUser_System_String_" data-uid="DisCatSharp.Entities.DiscordMessage.DeleteReactionAsync(DisCatSharp.Entities.DiscordEmoji,DisCatSharp.Entities.DiscordUser,System.String)">DeleteReactionAsync(DiscordEmoji, DiscordUser, String)</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Deletes another user&apos;s reaction.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public Task DeleteReactionAsync(DiscordEmoji emoji, DiscordUser user, string reason = null)</code></pre>
  </div>
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="DisCatSharp.Entities.DiscordEmoji.html">DiscordEmoji</a></td>
        <td><span class="parametername">emoji</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">Emoji for the reaction you want to remove, either an emoji or name:id.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="DisCatSharp.Entities.DiscordUser.html">DiscordUser</a></td>
        <td><span class="parametername">user</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">Member you want to remove the reaction for</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">String</a></td>
        <td><span class="parametername">reason</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">Reason for audit logs.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">Task</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_DeleteReactionsEmojiAsync_DisCatSharp_Entities_DiscordEmoji_.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.DeleteReactionsEmojiAsync(DisCatSharp.Entities.DiscordEmoji)%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L970">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_DeleteReactionsEmojiAsync_" data-uid="DisCatSharp.Entities.DiscordMessage.DeleteReactionsEmojiAsync*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_DeleteReactionsEmojiAsync_DisCatSharp_Entities_DiscordEmoji_" data-uid="DisCatSharp.Entities.DiscordMessage.DeleteReactionsEmojiAsync(DisCatSharp.Entities.DiscordEmoji)">DeleteReactionsEmojiAsync(DiscordEmoji)</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Deletes all reactions of a specific reaction for this message.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public Task DeleteReactionsEmojiAsync(DiscordEmoji emoji)</code></pre>
  </div>
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="DisCatSharp.Entities.DiscordEmoji.html">DiscordEmoji</a></td>
        <td><span class="parametername">emoji</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">The emoji to clear, either an emoji or name:id.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">Task</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_Equals_DisCatSharp_Entities_DiscordMessage_.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.Equals(DisCatSharp.Entities.DiscordMessage)%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L1031">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_Equals_" data-uid="DisCatSharp.Entities.DiscordMessage.Equals*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_Equals_DisCatSharp_Entities_DiscordMessage_" data-uid="DisCatSharp.Entities.DiscordMessage.Equals(DisCatSharp.Entities.DiscordMessage)">Equals(DiscordMessage)</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Checks whether this <a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a> is equal to another <a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a>.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public bool Equals(DiscordMessage e)</code></pre>
  </div>
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a></td>
        <td><span class="parametername">e</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1"><a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a> to compare to.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">Boolean</a></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">Whether the <a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a> is equal to this <a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a>.</p>
</td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_Equals_System_Object_.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.Equals(System.Object)%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L1023">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_Equals_" data-uid="DisCatSharp.Entities.DiscordMessage.Equals*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_Equals_System_Object_" data-uid="DisCatSharp.Entities.DiscordMessage.Equals(System.Object)">Equals(Object)</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Checks whether this <a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a> is equal to another object.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public override bool Equals(object obj)</code></pre>
  </div>
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">Object</a></td>
        <td><span class="parametername">obj</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">Object to compare to.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">Boolean</a></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">Whether the object is equal to this <a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a>.</p>
</td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_GetHashCode.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.GetHashCode%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L1038">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_GetHashCode_" data-uid="DisCatSharp.Entities.DiscordMessage.GetHashCode*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_GetHashCode" data-uid="DisCatSharp.Entities.DiscordMessage.GetHashCode">GetHashCode()</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets the hash code for this <a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a>.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public override int GetHashCode()</code></pre>
  </div>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">Int32</a></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">The hash code for this <a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a>.</p>
</td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_GetReactionsAsync_DisCatSharp_Entities_DiscordEmoji_System_Int32_System_Nullable_System_UInt64__.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.GetReactionsAsync(DisCatSharp.Entities.DiscordEmoji%2CSystem.Int32%2CSystem.Nullable%7BSystem.UInt64%7D)%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L931">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_GetReactionsAsync_" data-uid="DisCatSharp.Entities.DiscordMessage.GetReactionsAsync*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_GetReactionsAsync_DisCatSharp_Entities_DiscordEmoji_System_Int32_System_Nullable_System_UInt64__" data-uid="DisCatSharp.Entities.DiscordMessage.GetReactionsAsync(DisCatSharp.Entities.DiscordEmoji,System.Int32,System.Nullable{System.UInt64})">GetReactionsAsync(DiscordEmoji, Int32, Nullable&lt;UInt64&gt;)</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets users that reacted with this emoji.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public Task&lt;IReadOnlyList&lt;DiscordUser&gt;&gt; GetReactionsAsync(DiscordEmoji emoji, int limit = 25, ulong? after = null)</code></pre>
  </div>
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="DisCatSharp.Entities.DiscordEmoji.html">DiscordEmoji</a></td>
        <td><span class="parametername">emoji</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">Emoji to react with.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">Int32</a></td>
        <td><span class="parametername">limit</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">Limit of users to fetch.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.nullable-1">Nullable</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.uint64">UInt64</a>&gt;</td>
        <td><span class="parametername">after</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">Fetch users after this user&apos;s id.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">Task</span>&lt;<span class="xref">IReadOnlyList</span>&lt;<a class="xref" href="DisCatSharp.Entities.DiscordUser.html">DiscordUser</a>&gt;&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_ModifyAsync_Action_DisCatSharp_Entities_DiscordMessageBuilder__.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.ModifyAsync(Action%7BDisCatSharp.Entities.DiscordMessageBuilder%7D)%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L653">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_ModifyAsync_" data-uid="DisCatSharp.Entities.DiscordMessage.ModifyAsync*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_ModifyAsync_Action_DisCatSharp_Entities_DiscordMessageBuilder__" data-uid="DisCatSharp.Entities.DiscordMessage.ModifyAsync(Action{DisCatSharp.Entities.DiscordMessageBuilder})">ModifyAsync(Action&lt;DiscordMessageBuilder&gt;)</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Edits the message.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public async Task&lt;DiscordMessage&gt; ModifyAsync(Action&lt;DiscordMessageBuilder&gt; action)</code></pre>
  </div>
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">Action</span>&lt;<a class="xref" href="DisCatSharp.Entities.DiscordMessageBuilder.html">DiscordMessageBuilder</a>&gt;</td>
        <td><span class="parametername">action</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">The builder of the message to edit.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">Task</span>&lt;<a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_ModifyAsync_DisCatSharp_Entities_DiscordMessageBuilder_.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.ModifyAsync(DisCatSharp.Entities.DiscordMessageBuilder)%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L603">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_ModifyAsync_" data-uid="DisCatSharp.Entities.DiscordMessage.ModifyAsync*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_ModifyAsync_DisCatSharp_Entities_DiscordMessageBuilder_" data-uid="DisCatSharp.Entities.DiscordMessage.ModifyAsync(DisCatSharp.Entities.DiscordMessageBuilder)">ModifyAsync(DiscordMessageBuilder)</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Edits the message.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public async Task&lt;DiscordMessage&gt; ModifyAsync(DiscordMessageBuilder builder)</code></pre>
  </div>
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="DisCatSharp.Entities.DiscordMessageBuilder.html">DiscordMessageBuilder</a></td>
        <td><span class="parametername">builder</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">The builder of the message to edit.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">Task</span>&lt;<a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_ModifyAsync_DisCatSharp_Entities_Optional_DisCatSharp_Entities_DiscordEmbed__.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.ModifyAsync(DisCatSharp.Entities.Optional%7BDisCatSharp.Entities.DiscordEmbed%7D)%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L541">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_ModifyAsync_" data-uid="DisCatSharp.Entities.DiscordMessage.ModifyAsync*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_ModifyAsync_DisCatSharp_Entities_Optional_DisCatSharp_Entities_DiscordEmbed__" data-uid="DisCatSharp.Entities.DiscordMessage.ModifyAsync(DisCatSharp.Entities.Optional{DisCatSharp.Entities.DiscordEmbed})">ModifyAsync(Optional&lt;DiscordEmbed&gt;)</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Edits the message.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public Task&lt;DiscordMessage&gt; ModifyAsync(Optional&lt;DiscordEmbed&gt; embed = default(Optional&lt;DiscordEmbed&gt;))</code></pre>
  </div>
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="DisCatSharp.Entities.Optional-1.html">Optional</a>&lt;<a class="xref" href="DisCatSharp.Entities.DiscordEmbed.html">DiscordEmbed</a>&gt;</td>
        <td><span class="parametername">embed</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">New embed.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">Task</span>&lt;<a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_ModifyAsync_DisCatSharp_Entities_Optional_System_String__.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.ModifyAsync(DisCatSharp.Entities.Optional%7BSystem.String%7D)%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L521">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_ModifyAsync_" data-uid="DisCatSharp.Entities.DiscordMessage.ModifyAsync*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_ModifyAsync_DisCatSharp_Entities_Optional_System_String__" data-uid="DisCatSharp.Entities.DiscordMessage.ModifyAsync(DisCatSharp.Entities.Optional{System.String})">ModifyAsync(Optional&lt;String&gt;)</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Edits the message.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public Task&lt;DiscordMessage&gt; ModifyAsync(Optional&lt;string&gt; content)</code></pre>
  </div>
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="DisCatSharp.Entities.Optional-1.html">Optional</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">String</a>&gt;</td>
        <td><span class="parametername">content</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">New content.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">Task</span>&lt;<a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_ModifyAsync_DisCatSharp_Entities_Optional_System_String__DisCatSharp_Entities_Optional_DisCatSharp_Entities_DiscordEmbed__.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.ModifyAsync(DisCatSharp.Entities.Optional%7BSystem.String%7D%2CDisCatSharp.Entities.Optional%7BDisCatSharp.Entities.DiscordEmbed%7D)%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L562">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_ModifyAsync_" data-uid="DisCatSharp.Entities.DiscordMessage.ModifyAsync*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_ModifyAsync_DisCatSharp_Entities_Optional_System_String__DisCatSharp_Entities_Optional_DisCatSharp_Entities_DiscordEmbed__" data-uid="DisCatSharp.Entities.DiscordMessage.ModifyAsync(DisCatSharp.Entities.Optional{System.String},DisCatSharp.Entities.Optional{DisCatSharp.Entities.DiscordEmbed})">ModifyAsync(Optional&lt;String&gt;, Optional&lt;DiscordEmbed&gt;)</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Edits the message.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public Task&lt;DiscordMessage&gt; ModifyAsync(Optional&lt;string&gt; content, Optional&lt;DiscordEmbed&gt; embed = default(Optional&lt;DiscordEmbed&gt;))</code></pre>
  </div>
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="DisCatSharp.Entities.Optional-1.html">Optional</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">String</a>&gt;</td>
        <td><span class="parametername">content</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">New content.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="DisCatSharp.Entities.Optional-1.html">Optional</a>&lt;<a class="xref" href="DisCatSharp.Entities.DiscordEmbed.html">DiscordEmbed</a>&gt;</td>
        <td><span class="parametername">embed</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">New embed.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">Task</span>&lt;<a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_ModifyAsync_DisCatSharp_Entities_Optional_System_String__DisCatSharp_Entities_Optional_IEnumerable_DisCatSharp_Entities_DiscordEmbed___.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.ModifyAsync(DisCatSharp.Entities.Optional%7BSystem.String%7D%2CDisCatSharp.Entities.Optional%7BIEnumerable%7BDisCatSharp.Entities.DiscordEmbed%7D%7D)%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L583">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_ModifyAsync_" data-uid="DisCatSharp.Entities.DiscordMessage.ModifyAsync*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_ModifyAsync_DisCatSharp_Entities_Optional_System_String__DisCatSharp_Entities_Optional_IEnumerable_DisCatSharp_Entities_DiscordEmbed___" data-uid="DisCatSharp.Entities.DiscordMessage.ModifyAsync(DisCatSharp.Entities.Optional{System.String},DisCatSharp.Entities.Optional{IEnumerable{DisCatSharp.Entities.DiscordEmbed}})">ModifyAsync(Optional&lt;String&gt;, Optional&lt;IEnumerable&lt;DiscordEmbed&gt;&gt;)</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Edits the message.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public Task&lt;DiscordMessage&gt; ModifyAsync(Optional&lt;string&gt; content, Optional&lt;IEnumerable&lt;DiscordEmbed&gt;&gt; embeds = default(Optional&lt;IEnumerable&lt;DiscordEmbed&gt;&gt;))</code></pre>
  </div>
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="DisCatSharp.Entities.Optional-1.html">Optional</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">String</a>&gt;</td>
        <td><span class="parametername">content</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">New content.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="DisCatSharp.Entities.Optional-1.html">Optional</a>&lt;<span class="xref">IEnumerable</span>&lt;<a class="xref" href="DisCatSharp.Entities.DiscordEmbed.html">DiscordEmbed</a>&gt;&gt;</td>
        <td><span class="parametername">embeds</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">New embeds.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">Task</span>&lt;<a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_ModifySuppressionAsync_System_Boolean_.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.ModifySuppressionAsync(System.Boolean)%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L626">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_ModifySuppressionAsync_" data-uid="DisCatSharp.Entities.DiscordMessage.ModifySuppressionAsync*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_ModifySuppressionAsync_System_Boolean_" data-uid="DisCatSharp.Entities.DiscordMessage.ModifySuppressionAsync(System.Boolean)">ModifySuppressionAsync(Boolean)</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Edits the message embed suppression.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public Task&lt;DiscordMessage&gt; ModifySuppressionAsync(bool suppress = false)</code></pre>
  </div>
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">Boolean</a></td>
        <td><span class="parametername">suppress</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">Suppress embeds.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">Task</span>&lt;<a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_PinAsync.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.PinAsync%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L723">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_PinAsync_" data-uid="DisCatSharp.Entities.DiscordMessage.PinAsync*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_PinAsync" data-uid="DisCatSharp.Entities.DiscordMessage.PinAsync">PinAsync()</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Pins the message in its channel.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public Task PinAsync()</code></pre>
  </div>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">Task</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_RespondAsync_Action_DisCatSharp_Entities_DiscordMessageBuilder__.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.RespondAsync(Action%7BDisCatSharp.Entities.DiscordMessageBuilder%7D)%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L848">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_RespondAsync_" data-uid="DisCatSharp.Entities.DiscordMessage.RespondAsync*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_RespondAsync_Action_DisCatSharp_Entities_DiscordMessageBuilder__" data-uid="DisCatSharp.Entities.DiscordMessage.RespondAsync(Action{DisCatSharp.Entities.DiscordMessageBuilder})">RespondAsync(Action&lt;DiscordMessageBuilder&gt;)</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Responds to the message. This produces a reply.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public Task&lt;DiscordMessage&gt; RespondAsync(Action&lt;DiscordMessageBuilder&gt; action)</code></pre>
  </div>
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">Action</span>&lt;<a class="xref" href="DisCatSharp.Entities.DiscordMessageBuilder.html">DiscordMessageBuilder</a>&gt;</td>
        <td><span class="parametername">action</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">The Discord message builder.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">Task</span>&lt;<a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a>&gt;</td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">The sent message.</p>
</td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_RespondAsync_DisCatSharp_Entities_DiscordEmbed_.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.RespondAsync(DisCatSharp.Entities.DiscordEmbed)%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L784">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_RespondAsync_" data-uid="DisCatSharp.Entities.DiscordMessage.RespondAsync*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_RespondAsync_DisCatSharp_Entities_DiscordEmbed_" data-uid="DisCatSharp.Entities.DiscordMessage.RespondAsync(DisCatSharp.Entities.DiscordEmbed)">RespondAsync(DiscordEmbed)</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Responds to the message. This produces a reply.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public Task&lt;DiscordMessage&gt; RespondAsync(DiscordEmbed embed)</code></pre>
  </div>
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="DisCatSharp.Entities.DiscordEmbed.html">DiscordEmbed</a></td>
        <td><span class="parametername">embed</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">Embed to attach to the message.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">Task</span>&lt;<a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a>&gt;</td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">The sent message.</p>
</td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_RespondAsync_DisCatSharp_Entities_DiscordMessageBuilder_.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.RespondAsync(DisCatSharp.Entities.DiscordMessageBuilder)%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L827">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_RespondAsync_" data-uid="DisCatSharp.Entities.DiscordMessage.RespondAsync*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_RespondAsync_DisCatSharp_Entities_DiscordMessageBuilder_" data-uid="DisCatSharp.Entities.DiscordMessage.RespondAsync(DisCatSharp.Entities.DiscordMessageBuilder)">RespondAsync(DiscordMessageBuilder)</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Responds to the message. This produces a reply.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public Task&lt;DiscordMessage&gt; RespondAsync(DiscordMessageBuilder builder)</code></pre>
  </div>
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="DisCatSharp.Entities.DiscordMessageBuilder.html">DiscordMessageBuilder</a></td>
        <td><span class="parametername">builder</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">The Discord message builder.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">Task</span>&lt;<a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a>&gt;</td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">The sent message.</p>
</td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_RespondAsync_System_String_.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.RespondAsync(System.String)%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L763">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_RespondAsync_" data-uid="DisCatSharp.Entities.DiscordMessage.RespondAsync*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_RespondAsync_System_String_" data-uid="DisCatSharp.Entities.DiscordMessage.RespondAsync(System.String)">RespondAsync(String)</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Responds to the message. This produces a reply.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public Task&lt;DiscordMessage&gt; RespondAsync(string content)</code></pre>
  </div>
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">String</a></td>
        <td><span class="parametername">content</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">Message content to respond with.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">Task</span>&lt;<a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a>&gt;</td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">The sent message.</p>
</td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_RespondAsync_System_String_DisCatSharp_Entities_DiscordEmbed_.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.RespondAsync(System.String%2CDisCatSharp.Entities.DiscordEmbed)%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L806">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_RespondAsync_" data-uid="DisCatSharp.Entities.DiscordMessage.RespondAsync*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_RespondAsync_System_String_DisCatSharp_Entities_DiscordEmbed_" data-uid="DisCatSharp.Entities.DiscordMessage.RespondAsync(System.String,DisCatSharp.Entities.DiscordEmbed)">RespondAsync(String, DiscordEmbed)</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Responds to the message. This produces a reply.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public Task&lt;DiscordMessage&gt; RespondAsync(string content, DiscordEmbed embed)</code></pre>
  </div>
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">String</a></td>
        <td><span class="parametername">content</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">Message content to respond with.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="DisCatSharp.Entities.DiscordEmbed.html">DiscordEmbed</a></td>
        <td><span class="parametername">embed</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">Embed to attach to the message.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">Task</span>&lt;<a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a>&gt;</td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">The sent message.</p>
</td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_ToString.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.ToString%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L1015">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_ToString_" data-uid="DisCatSharp.Entities.DiscordMessage.ToString*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_ToString" data-uid="DisCatSharp.Entities.DiscordMessage.ToString">ToString()</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Returns a string representation of this message.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public override string ToString()</code></pre>
  </div>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">String</a></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">String representation of this message.</p>
</td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_UnpinAsync.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.UnpinAsync%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L742">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_UnpinAsync_" data-uid="DisCatSharp.Entities.DiscordMessage.UnpinAsync*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_UnpinAsync" data-uid="DisCatSharp.Entities.DiscordMessage.UnpinAsync">UnpinAsync()</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Unpins the message in its channel.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public Task UnpinAsync()</code></pre>
  </div>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">Task</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="operators">Operators
</h3>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_op_Equality_DisCatSharp_Entities_DiscordMessage_DisCatSharp_Entities_DiscordMessage_.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.op_Equality(DisCatSharp.Entities.DiscordMessage%2CDisCatSharp.Entities.DiscordMessage)%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L1054">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_op_Equality_" data-uid="DisCatSharp.Entities.DiscordMessage.op_Equality*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_op_Equality_DisCatSharp_Entities_DiscordMessage_DisCatSharp_Entities_DiscordMessage_" data-uid="DisCatSharp.Entities.DiscordMessage.op_Equality(DisCatSharp.Entities.DiscordMessage,DisCatSharp.Entities.DiscordMessage)">Equality(DiscordMessage, DiscordMessage)</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets whether the two <a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a> objects are equal.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public static bool operator ==(DiscordMessage e1, DiscordMessage e2)</code></pre>
  </div>
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a></td>
        <td><span class="parametername">e1</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">First message to compare.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a></td>
        <td><span class="parametername">e2</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">Second message to compare.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">Boolean</a></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">Whether the two messages are equal.</p>
</td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Entities_DiscordMessage_op_Inequality_DisCatSharp_Entities_DiscordMessage_DisCatSharp_Entities_DiscordMessage_.md&amp;value=---%0Auid%3A%20DisCatSharp.Entities.DiscordMessage.op_Inequality(DisCatSharp.Entities.DiscordMessage%2CDisCatSharp.Entities.DiscordMessage)%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp/Entities/Message/DiscordMessage.cs/#L1070">View Source</a>
  </span>
  <a id="DisCatSharp_Entities_DiscordMessage_op_Inequality_" data-uid="DisCatSharp.Entities.DiscordMessage.op_Inequality*"></a>
  <h4 id="DisCatSharp_Entities_DiscordMessage_op_Inequality_DisCatSharp_Entities_DiscordMessage_DisCatSharp_Entities_DiscordMessage_" data-uid="DisCatSharp.Entities.DiscordMessage.op_Inequality(DisCatSharp.Entities.DiscordMessage,DisCatSharp.Entities.DiscordMessage)">Inequality(DiscordMessage, DiscordMessage)</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets whether the two <a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a> objects are not equal.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public static bool operator !=(DiscordMessage e1, DiscordMessage e2)</code></pre>
  </div>
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a></td>
        <td><span class="parametername">e1</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">First message to compare.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="DisCatSharp.Entities.DiscordMessage.html">DiscordMessage</a></td>
        <td><span class="parametername">e2</span></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">Second message to compare.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">Boolean</a></td>
        <td><p sourcefile="api/DisCatSharp/DisCatSharp.Entities.DiscordMessage.yml" sourcestartlinenumber="1" sourceendlinenumber="1">Whether the two messages are not equal.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <span class="xref">IEquatable&lt;&gt;</span>
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