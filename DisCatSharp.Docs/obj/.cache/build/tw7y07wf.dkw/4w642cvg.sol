<!DOCTYPE html>
<!--[if IE]><![endif]-->
<html>

    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <title>Dependency Injection Logging | DisCatSharp Docs </title>
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
      <meta name="title" content="Dependency Injection Logging | DisCatSharp Docs ">
      <meta name="og:title" content="Dependency Injection Logging | DisCatSharp Docs ">
      <meta name="generator" content="docfx 2.60.0.0">
  
    <meta name="og:type" content="website">
    <meta name="og:image" content="https://cdn.aitsys.dev/file/data/kmjpa6f64me66dsm7dz3/PHID-FILE-degpfzd7nbw2q5yko5j7/logobig.png">
    <meta name="og:image:alt" content="DisCatSharp Logo">
    <meta name="og:image:type" content="image/png">
    <meta name="og:site_name" content="DisCatSharp Documentation">
    <link rel="apple-touch-icon" sizes="57x57" href="../../../apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="../../../apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="../../../apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="../../../apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="../../../apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="../../../apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="../../../apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="../../../apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="../../../apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="../../../android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../../../favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="../../../favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../../../favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="../../../ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
      <link rel="shortcut icon" href="../../../favicon.ico">
      <script defer="" src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "de6c22ce0b3e4c17bb78c8c31b4e695b"}'></script>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/night-owl.min.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" integrity="sha384-EvBWSlnoFgZlXJvpzS+MAUEjvN7+gcCwH+qh7GRFOGgZO0PuwOFro7qPOJnLfe7l" crossorigin="anonymous">
      <link rel="stylesheet" href="../../../src/styles/config.css">
      <link rel="stylesheet" href="../../../src/styles/discord.css">
      <link rel="stylesheet" href="../../../src/styles/dcs.css">
      <link rel="stylesheet" href="../../../src/styles/main.css">
      <link rel="stylesheet" href="../../../src/styles/colors.css">
      <link rel="stylesheet" href="../../../src/styles/highlight/github-dark.min.css">
      <meta property="docfx:navrel" content="../../../toc.html">
      <meta property="docfx:tocrel" content="../../toc.html">
  
  <meta property="docfx:rel" content="../../../">
  <meta property="docfx:newtab" content="true">
    </head>

    <body>
        <div class="top-navbar">
            <a class="burger-icon" onclick="toggleMenu()">
                <svg name="Hamburger" style="vertical-align: middle;" width="34" height="34" viewbox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M20 6H4V9H20V6ZM4 10.999H20V13.999H4V10.999ZM4 15.999H20V18.999H4V15.999Z"></path></svg>
            </a>


            <a class="navbar-brand" href="../../../index.html">
              <img id="logo" class="svg" src="../../../logo.png" alt="DisCatSharp">
            </a>
        </div>

        <div class="body-content">
            <div id="blackout" class="blackout" onclick="toggleMenu()"></div>

            <nav id="sidebar" role="navigation">
                <div class="sidebar">

                    <div>
                      <div class="mobile-hide">

                        <a class="navbar-brand" href="../../../index.html">
                          <img id="logo" class="svg" src="../../../logo.png" alt="DisCatSharp">
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

                    <article class="content wrap" id="_content" data-uid="beyond_basics_logging_di">
<h2 id="default-logger" sourcefile="articles/beyond_basics/logging/di.md" sourcestartlinenumber="6" sourceendlinenumber="6">Default Logger</h2>

<p sourcefile="articles/beyond_basics/logging/di.md" sourcestartlinenumber="8" sourceendlinenumber="8">By default, when using DI, you will be using Microsoft&#39;s implementation of <code>ILogger</code> and <code>ILoggerFactory</code>. This requires no additional setup.</p>
<h2 id="third-party-logger" sourcefile="articles/beyond_basics/logging/di.md" sourcestartlinenumber="10" sourceendlinenumber="10">Third Party Logger</h2>
<p sourcefile="articles/beyond_basics/logging/di.md" sourcestartlinenumber="12" sourceendlinenumber="12">If you wish to use a different logging service/implementation you simply install the appropriate nuget package, or create your own which have implementations for <code>ILoggerFactory</code> and <code>ILogger</code>.</p>
<p sourcefile="articles/beyond_basics/logging/di.md" sourcestartlinenumber="14" sourceendlinenumber="14">You need to register either this third party implementation or your own via the <code>IServiceCollection</code> which becomes <code>IServiceProvider</code> at runtime.</p>
<p sourcefile="articles/beyond_basics/logging/di.md" sourcestartlinenumber="16" sourceendlinenumber="16">If we are using the DisCatSharp ProjectTemplates there will be a project with a <code>.Web</code>. Inside is a <code>Program.cs</code> file.</p>
<h3 id="webhost-serilog" sourcefile="articles/beyond_basics/logging/di.md" sourcestartlinenumber="18" sourceendlinenumber="18">WebHost: Serilog</h3>
<ul sourcefile="articles/beyond_basics/logging/di.md" sourcestartlinenumber="20" sourceendlinenumber="22">
<li sourcefile="articles/beyond_basics/logging/di.md" sourcestartlinenumber="20" sourceendlinenumber="20">Serilog.AspNetCore</li>
<li sourcefile="articles/beyond_basics/logging/di.md" sourcestartlinenumber="21" sourceendlinenumber="21">Serilog.Extensions.Hosting -- Gives us the <code>UseSerilog</code> extension</li>
<li sourcefile="articles/beyond_basics/logging/di.md" sourcestartlinenumber="22" sourceendlinenumber="22">Serilog.Sinks.Console      -- Sinks are used to direct where logs go. In this case we need it for outputting to console</li>
</ul>
<pre sourcefile="articles/beyond_basics/logging/di.md" sourcestartlinenumber="24" sourceendlinenumber="32"><code class="lang-csharp">using Serilog;

// unrelated code not shown for brevity
builder.Host.UseSerilog( (context, lc) =&gt; lc.WriteTo.Console()); // Our logs are directed to the console

var app = builder.Build();
app.Run();
</code></pre></article>
                </div>

                <div class="copyright-footer">
                    <span>&#169; Aiko IT Systems. All rights reserved.</span>
                </div>
            </div></main>
        </div>


        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
        <script type="text/javascript" src="../../../src/scripts/docfx.vendor.js"></script>
        <script type="text/javascript" src="../../../src/scripts/docfx.js"></script>
        <script type="text/javascript" src="../../../src/scripts/url.min.js"></script>
        <script type="text/javascript" src="../../../src/scripts/highlight/highlight.min.js"></script>
        <script>hljs.highlightAll();</script>
        <script src="https://cdn.jsdelivr.net/npm/anchor-js/anchor.min.js"></script>
        <script type="text/javascript" src="../../../src/scripts/jquery.twbsPagination.js"></script>
        <script type="text/javascript" src="../../../src/scripts/dcs.js"></script>
        <script type="text/javascript" src="../../../src/scripts/lunr.js"></script>
    </body>
</html>