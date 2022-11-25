<!DOCTYPE html>
<!--[if IE]><![endif]-->
<html>

    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <title>

Class LavalinkNodeConnection













 | DisCatSharp Docs </title>
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
      <meta name="title" content="

Class LavalinkNodeConnection













 | DisCatSharp Docs ">
      <meta name="og:title" content="

Class LavalinkNodeConnection













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

                    <article class="content wrap" id="_content" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection">


  <h1 id="DisCatSharp_Lavalink_LavalinkNodeConnection" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection" class="text-break">

Class LavalinkNodeConnection













</h1>
  <div class="markdown level0 summary"><p sourcefile="api/DisCatSharp.Lavalink/DisCatSharp.Lavalink.LavalinkNodeConnection.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Represents a connection to a Lavalink node.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">Object</a></div>
    <div class="level1"><span class="xref">LavalinkNodeConnection</span></div>
  </div>
  <h6><strong>Namespace</strong>: <a class="xref" href="DisCatSharp.Lavalink.html">DisCatSharp.Lavalink</a></h6>
  <h6><strong>Assembly</strong>: DisCatSharp.Lavalink.dll</h6>
  <h5 id="DisCatSharp_Lavalink_LavalinkNodeConnection_syntax">Syntax</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public sealed class LavalinkNodeConnection : object</code></pre>
  </div>
  <h3 id="properties">Properties
</h3>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Lavalink_LavalinkNodeConnection_ConnectedGuilds.md&amp;value=---%0Auid%3A%20DisCatSharp.Lavalink.LavalinkNodeConnection.ConnectedGuilds%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp.Lavalink/LavalinkNodeConnection.cs/#L163">View Source</a>
  </span>
  <a id="DisCatSharp_Lavalink_LavalinkNodeConnection_ConnectedGuilds_" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection.ConnectedGuilds*"></a>
  <h4 id="DisCatSharp_Lavalink_LavalinkNodeConnection_ConnectedGuilds" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection.ConnectedGuilds">ConnectedGuilds</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp.Lavalink/DisCatSharp.Lavalink.LavalinkNodeConnection.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets a dictionary of Lavalink guild connections for this node.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public IReadOnlyDictionary&lt;ulong, LavalinkGuildConnection&gt; ConnectedGuilds { get; }</code></pre>
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
        <td><span class="xref">IReadOnlyDictionary</span>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.uint64">UInt64</a>, <a class="xref" href="DisCatSharp.Lavalink.LavalinkGuildConnection.html">LavalinkGuildConnection</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Lavalink_LavalinkNodeConnection_Discord.md&amp;value=---%0Auid%3A%20DisCatSharp.Lavalink.LavalinkNodeConnection.Discord%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp.Lavalink/LavalinkNodeConnection.cs/#L179">View Source</a>
  </span>
  <a id="DisCatSharp_Lavalink_LavalinkNodeConnection_Discord_" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection.Discord*"></a>
  <h4 id="DisCatSharp_Lavalink_LavalinkNodeConnection_Discord" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection.Discord">Discord</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp.Lavalink/DisCatSharp.Lavalink.LavalinkNodeConnection.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets the Discord client this node connection belongs to.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public DiscordClient Discord { get; }</code></pre>
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
        <td><a class="xref" href="../DisCatSharp/DisCatSharp.DiscordClient.html">DiscordClient</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Lavalink_LavalinkNodeConnection_IsConnected.md&amp;value=---%0Auid%3A%20DisCatSharp.Lavalink.LavalinkNodeConnection.IsConnected%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp.Lavalink/LavalinkNodeConnection.cs/#L143">View Source</a>
  </span>
  <a id="DisCatSharp_Lavalink_LavalinkNodeConnection_IsConnected_" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection.IsConnected*"></a>
  <h4 id="DisCatSharp_Lavalink_LavalinkNodeConnection_IsConnected" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection.IsConnected">IsConnected</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp.Lavalink/DisCatSharp.Lavalink.LavalinkNodeConnection.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets whether the client is connected to Lavalink.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public bool IsConnected { get; }</code></pre>
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
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Lavalink_LavalinkNodeConnection_NodeEndpoint.md&amp;value=---%0Auid%3A%20DisCatSharp.Lavalink.LavalinkNodeConnection.NodeEndpoint%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp.Lavalink/LavalinkNodeConnection.cs/#L138">View Source</a>
  </span>
  <a id="DisCatSharp_Lavalink_LavalinkNodeConnection_NodeEndpoint_" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection.NodeEndpoint*"></a>
  <h4 id="DisCatSharp_Lavalink_LavalinkNodeConnection_NodeEndpoint" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection.NodeEndpoint">NodeEndpoint</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp.Lavalink/DisCatSharp.Lavalink.LavalinkNodeConnection.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets the remote endpoint of this Lavalink node connection.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public ConnectionEndpoint NodeEndpoint { get; }</code></pre>
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
        <td><a class="xref" href="../DisCatSharp/DisCatSharp.Net.ConnectionEndpoint.html">ConnectionEndpoint</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Lavalink_LavalinkNodeConnection_Parent.md&amp;value=---%0Auid%3A%20DisCatSharp.Lavalink.LavalinkNodeConnection.Parent%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp.Lavalink/LavalinkNodeConnection.cs/#L174">View Source</a>
  </span>
  <a id="DisCatSharp_Lavalink_LavalinkNodeConnection_Parent_" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection.Parent*"></a>
  <h4 id="DisCatSharp_Lavalink_LavalinkNodeConnection_Parent" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection.Parent">Parent</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp.Lavalink/DisCatSharp.Lavalink.LavalinkNodeConnection.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets the parent extension which this node connection belongs to.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public LavalinkExtension Parent { get; }</code></pre>
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
        <td><a class="xref" href="DisCatSharp.Lavalink.LavalinkExtension.html">LavalinkExtension</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Lavalink_LavalinkNodeConnection_Rest.md&amp;value=---%0Auid%3A%20DisCatSharp.Lavalink.LavalinkNodeConnection.Rest%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp.Lavalink/LavalinkNodeConnection.cs/#L169">View Source</a>
  </span>
  <a id="DisCatSharp_Lavalink_LavalinkNodeConnection_Rest_" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection.Rest*"></a>
  <h4 id="DisCatSharp_Lavalink_LavalinkNodeConnection_Rest" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection.Rest">Rest</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp.Lavalink/DisCatSharp.Lavalink.LavalinkNodeConnection.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets the REST client for this Lavalink connection.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public LavalinkRestClient Rest { get; }</code></pre>
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
        <td><a class="xref" href="DisCatSharp.Lavalink.LavalinkRestClient.html">LavalinkRestClient</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Lavalink_LavalinkNodeConnection_Statistics.md&amp;value=---%0Auid%3A%20DisCatSharp.Lavalink.LavalinkNodeConnection.Statistics%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp.Lavalink/LavalinkNodeConnection.cs/#L158">View Source</a>
  </span>
  <a id="DisCatSharp_Lavalink_LavalinkNodeConnection_Statistics_" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection.Statistics*"></a>
  <h4 id="DisCatSharp_Lavalink_LavalinkNodeConnection_Statistics" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection.Statistics">Statistics</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp.Lavalink/DisCatSharp.Lavalink.LavalinkNodeConnection.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets the current resource usage statistics.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public LavalinkStatistics Statistics { get; }</code></pre>
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
        <td><a class="xref" href="DisCatSharp.Lavalink.Entities.LavalinkStatistics.html">LavalinkStatistics</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Lavalink_LavalinkNodeConnection_ConnectAsync_DisCatSharp_Entities_DiscordChannel_.md&amp;value=---%0Auid%3A%20DisCatSharp.Lavalink.LavalinkNodeConnection.ConnectAsync(DisCatSharp.Entities.DiscordChannel)%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp.Lavalink/LavalinkNodeConnection.cs/#L325">View Source</a>
  </span>
  <a id="DisCatSharp_Lavalink_LavalinkNodeConnection_ConnectAsync_" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection.ConnectAsync*"></a>
  <h4 id="DisCatSharp_Lavalink_LavalinkNodeConnection_ConnectAsync_DisCatSharp_Entities_DiscordChannel_" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection.ConnectAsync(DisCatSharp.Entities.DiscordChannel)">ConnectAsync(DiscordChannel)</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp.Lavalink/DisCatSharp.Lavalink.LavalinkNodeConnection.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Connects this Lavalink node to specified Discord channel.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public async Task&lt;LavalinkGuildConnection&gt; ConnectAsync(DiscordChannel channel)</code></pre>
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
        <td><a class="xref" href="../DisCatSharp/DisCatSharp.Entities.DiscordChannel.html">DiscordChannel</a></td>
        <td><span class="parametername">channel</span></td>
        <td><p sourcefile="api/DisCatSharp.Lavalink/DisCatSharp.Lavalink.LavalinkNodeConnection.yml" sourcestartlinenumber="1" sourceendlinenumber="1">Voice channel to connect to.</p>
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
        <td><span class="xref">Task</span>&lt;<a class="xref" href="DisCatSharp.Lavalink.LavalinkGuildConnection.html">LavalinkGuildConnection</a>&gt;</td>
        <td><p sourcefile="api/DisCatSharp.Lavalink/DisCatSharp.Lavalink.LavalinkNodeConnection.yml" sourcestartlinenumber="1" sourceendlinenumber="1">Channel connection, which allows for playback control.</p>
</td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Lavalink_LavalinkNodeConnection_GetGuildConnection_DisCatSharp_Entities_DiscordGuild_.md&amp;value=---%0Auid%3A%20DisCatSharp.Lavalink.LavalinkNodeConnection.GetGuildConnection(DisCatSharp.Entities.DiscordGuild)%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp.Lavalink/LavalinkNodeConnection.cs/#L372">View Source</a>
  </span>
  <a id="DisCatSharp_Lavalink_LavalinkNodeConnection_GetGuildConnection_" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection.GetGuildConnection*"></a>
  <h4 id="DisCatSharp_Lavalink_LavalinkNodeConnection_GetGuildConnection_DisCatSharp_Entities_DiscordGuild_" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection.GetGuildConnection(DisCatSharp.Entities.DiscordGuild)">GetGuildConnection(DiscordGuild)</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp.Lavalink/DisCatSharp.Lavalink.LavalinkNodeConnection.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Gets a Lavalink connection to specified Discord channel.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public LavalinkGuildConnection GetGuildConnection(DiscordGuild guild)</code></pre>
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
        <td><a class="xref" href="../DisCatSharp/DisCatSharp.Entities.DiscordGuild.html">DiscordGuild</a></td>
        <td><span class="parametername">guild</span></td>
        <td><p sourcefile="api/DisCatSharp.Lavalink/DisCatSharp.Lavalink.LavalinkNodeConnection.yml" sourcestartlinenumber="1" sourceendlinenumber="1">Guild to get connection for.</p>
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
        <td><a class="xref" href="DisCatSharp.Lavalink.LavalinkGuildConnection.html">LavalinkGuildConnection</a></td>
        <td><p sourcefile="api/DisCatSharp.Lavalink/DisCatSharp.Lavalink.LavalinkNodeConnection.yml" sourcestartlinenumber="1" sourceendlinenumber="1">Channel connection, which allows for playback control.</p>
</td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Lavalink_LavalinkNodeConnection_StopAsync.md&amp;value=---%0Auid%3A%20DisCatSharp.Lavalink.LavalinkNodeConnection.StopAsync%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp.Lavalink/LavalinkNodeConnection.cs/#L307">View Source</a>
  </span>
  <a id="DisCatSharp_Lavalink_LavalinkNodeConnection_StopAsync_" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection.StopAsync*"></a>
  <h4 id="DisCatSharp_Lavalink_LavalinkNodeConnection_StopAsync" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection.StopAsync">StopAsync()</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp.Lavalink/DisCatSharp.Lavalink.LavalinkNodeConnection.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Stops this Lavalink node connection and frees resources.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public async Task StopAsync()</code></pre>
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
  <h3 id="events">Events
</h3>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Lavalink_LavalinkNodeConnection_Disconnected.md&amp;value=---%0Auid%3A%20DisCatSharp.Lavalink.LavalinkNodeConnection.Disconnected%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp.Lavalink/LavalinkNodeConnection.cs/#L67">View Source</a>
  </span>
  <h4 id="DisCatSharp_Lavalink_LavalinkNodeConnection_Disconnected" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection.Disconnected">Disconnected</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp.Lavalink/DisCatSharp.Lavalink.LavalinkNodeConnection.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Triggered when this node disconnects.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public event AsyncEventHandler&lt;LavalinkNodeConnection, NodeDisconnectedEventArgs&gt; Disconnected</code></pre>
  </div>
  <h5 class="eventType">Event Type</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">AsyncEventHandler</span>&lt;<a class="xref" href="DisCatSharp.Lavalink.LavalinkNodeConnection.html">LavalinkNodeConnection</a>, <a class="xref" href="DisCatSharp.Lavalink.EventArgs.NodeDisconnectedEventArgs.html">NodeDisconnectedEventArgs</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Lavalink_LavalinkNodeConnection_LavalinkSocketErrored.md&amp;value=---%0Auid%3A%20DisCatSharp.Lavalink.LavalinkNodeConnection.LavalinkSocketErrored%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp.Lavalink/LavalinkNodeConnection.cs/#L57">View Source</a>
  </span>
  <h4 id="DisCatSharp_Lavalink_LavalinkNodeConnection_LavalinkSocketErrored" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection.LavalinkSocketErrored">LavalinkSocketErrored</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp.Lavalink/DisCatSharp.Lavalink.LavalinkNodeConnection.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Triggered whenever Lavalink WebSocket throws an exception.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public event AsyncEventHandler&lt;LavalinkNodeConnection, SocketErrorEventArgs&gt; LavalinkSocketErrored</code></pre>
  </div>
  <h5 class="eventType">Event Type</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">AsyncEventHandler</span>&lt;<a class="xref" href="DisCatSharp.Lavalink.LavalinkNodeConnection.html">LavalinkNodeConnection</a>, <a class="xref" href="../DisCatSharp/DisCatSharp.EventArgs.SocketErrorEventArgs.html">SocketErrorEventArgs</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Lavalink_LavalinkNodeConnection_PlaybackFinished.md&amp;value=---%0Auid%3A%20DisCatSharp.Lavalink.LavalinkNodeConnection.PlaybackFinished%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp.Lavalink/LavalinkNodeConnection.cs/#L108">View Source</a>
  </span>
  <h4 id="DisCatSharp_Lavalink_LavalinkNodeConnection_PlaybackFinished" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection.PlaybackFinished">PlaybackFinished</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp.Lavalink/DisCatSharp.Lavalink.LavalinkNodeConnection.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Triggered whenever playback of a track finishes.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public event AsyncEventHandler&lt;LavalinkGuildConnection, TrackFinishEventArgs&gt; PlaybackFinished</code></pre>
  </div>
  <h5 class="eventType">Event Type</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">AsyncEventHandler</span>&lt;<a class="xref" href="DisCatSharp.Lavalink.LavalinkGuildConnection.html">LavalinkGuildConnection</a>, <a class="xref" href="DisCatSharp.Lavalink.EventArgs.TrackFinishEventArgs.html">TrackFinishEventArgs</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Lavalink_LavalinkNodeConnection_PlaybackStarted.md&amp;value=---%0Auid%3A%20DisCatSharp.Lavalink.LavalinkNodeConnection.PlaybackStarted%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp.Lavalink/LavalinkNodeConnection.cs/#L98">View Source</a>
  </span>
  <h4 id="DisCatSharp_Lavalink_LavalinkNodeConnection_PlaybackStarted" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection.PlaybackStarted">PlaybackStarted</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp.Lavalink/DisCatSharp.Lavalink.LavalinkNodeConnection.yml" sourcestartlinenumber="2" sourceendlinenumber="3">Triggered whenever playback of a track starts.
<p>This is only available for version 3.3.1 and greater.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public event AsyncEventHandler&lt;LavalinkGuildConnection, TrackStartEventArgs&gt; PlaybackStarted</code></pre>
  </div>
  <h5 class="eventType">Event Type</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">AsyncEventHandler</span>&lt;<a class="xref" href="DisCatSharp.Lavalink.LavalinkGuildConnection.html">LavalinkGuildConnection</a>, <a class="xref" href="DisCatSharp.Lavalink.EventArgs.TrackStartEventArgs.html">TrackStartEventArgs</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Lavalink_LavalinkNodeConnection_PlayerUpdated.md&amp;value=---%0Auid%3A%20DisCatSharp.Lavalink.LavalinkNodeConnection.PlayerUpdated%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp.Lavalink/LavalinkNodeConnection.cs/#L87">View Source</a>
  </span>
  <h4 id="DisCatSharp_Lavalink_LavalinkNodeConnection_PlayerUpdated" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection.PlayerUpdated">PlayerUpdated</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp.Lavalink/DisCatSharp.Lavalink.LavalinkNodeConnection.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Triggered whenever any of the players on this node is updated.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public event AsyncEventHandler&lt;LavalinkGuildConnection, PlayerUpdateEventArgs&gt; PlayerUpdated</code></pre>
  </div>
  <h5 class="eventType">Event Type</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">AsyncEventHandler</span>&lt;<a class="xref" href="DisCatSharp.Lavalink.LavalinkGuildConnection.html">LavalinkGuildConnection</a>, <a class="xref" href="DisCatSharp.Lavalink.EventArgs.PlayerUpdateEventArgs.html">PlayerUpdateEventArgs</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Lavalink_LavalinkNodeConnection_StatisticsReceived.md&amp;value=---%0Auid%3A%20DisCatSharp.Lavalink.LavalinkNodeConnection.StatisticsReceived%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp.Lavalink/LavalinkNodeConnection.cs/#L77">View Source</a>
  </span>
  <h4 id="DisCatSharp_Lavalink_LavalinkNodeConnection_StatisticsReceived" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection.StatisticsReceived">StatisticsReceived</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp.Lavalink/DisCatSharp.Lavalink.LavalinkNodeConnection.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Triggered when this node receives a statistics update.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public event AsyncEventHandler&lt;LavalinkNodeConnection, StatisticsReceivedEventArgs&gt; StatisticsReceived</code></pre>
  </div>
  <h5 class="eventType">Event Type</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">AsyncEventHandler</span>&lt;<a class="xref" href="DisCatSharp.Lavalink.LavalinkNodeConnection.html">LavalinkNodeConnection</a>, <a class="xref" href="DisCatSharp.Lavalink.EventArgs.StatisticsReceivedEventArgs.html">StatisticsReceivedEventArgs</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Lavalink_LavalinkNodeConnection_TrackException.md&amp;value=---%0Auid%3A%20DisCatSharp.Lavalink.LavalinkNodeConnection.TrackException%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp.Lavalink/LavalinkNodeConnection.cs/#L128">View Source</a>
  </span>
  <h4 id="DisCatSharp_Lavalink_LavalinkNodeConnection_TrackException" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection.TrackException">TrackException</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp.Lavalink/DisCatSharp.Lavalink.LavalinkNodeConnection.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Triggered whenever playback of a track encounters an error.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public event AsyncEventHandler&lt;LavalinkGuildConnection, TrackExceptionEventArgs&gt; TrackException</code></pre>
  </div>
  <h5 class="eventType">Event Type</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">AsyncEventHandler</span>&lt;<a class="xref" href="DisCatSharp.Lavalink.LavalinkGuildConnection.html">LavalinkGuildConnection</a>, <a class="xref" href="DisCatSharp.Lavalink.EventArgs.TrackExceptionEventArgs.html">TrackExceptionEventArgs</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <span class="small pull-right mobile-hide">
    <span class="divider">|</span>
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/new/main/apiSpec/new?filename=DisCatSharp_Lavalink_LavalinkNodeConnection_TrackStuck.md&amp;value=---%0Auid%3A%20DisCatSharp.Lavalink.LavalinkNodeConnection.TrackStuck%0Asummary%3A%20&#39;*You%20can%20override%20summary%20for%20the%20API%20here%20using%20*MARKDOWN*%20syntax&#39;%0A---%0A%0A*Please%20type%20below%20more%20information%20about%20this%20API%3A*%0A%0A">Improve this Doc</a>
  </span>
  <span class="small pull-right mobile-hide">
    <a href="https://github.com/Aiko-IT-Systems/DisCatSharp/blob/main/DisCatSharp.Lavalink/LavalinkNodeConnection.cs/#L118">View Source</a>
  </span>
  <h4 id="DisCatSharp_Lavalink_LavalinkNodeConnection_TrackStuck" data-uid="DisCatSharp.Lavalink.LavalinkNodeConnection.TrackStuck">TrackStuck</h4>
  <div class="markdown level1 summary"><p sourcefile="api/DisCatSharp.Lavalink/DisCatSharp.Lavalink.LavalinkNodeConnection.yml" sourcestartlinenumber="2" sourceendlinenumber="2">Triggered whenever playback of a track gets stuck.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
  <div class="codewrapper">
    <pre><code class="lang-csharp hljs">public event AsyncEventHandler&lt;LavalinkGuildConnection, TrackStuckEventArgs&gt; TrackStuck</code></pre>
  </div>
  <h5 class="eventType">Event Type</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">AsyncEventHandler</span>&lt;<a class="xref" href="DisCatSharp.Lavalink.LavalinkGuildConnection.html">LavalinkGuildConnection</a>, <a class="xref" href="DisCatSharp.Lavalink.EventArgs.TrackStuckEventArgs.html">TrackStuckEventArgs</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>

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