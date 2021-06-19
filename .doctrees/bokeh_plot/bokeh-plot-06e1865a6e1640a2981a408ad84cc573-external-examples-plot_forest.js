(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("fadba059-f196-4687-98a7-382b9cc7f3c2");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fadba059-f196-4687-98a7-382b9cc7f3c2' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.2.min.js": "XypntL49z55iwGVUW4qsEu83zKL3XEcz0MjuGOQ9SlaaQ68X/g+k1FcioZi7oQAc", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.2.min.js": "bEsM86IHGDTLCS0Zod8a8WM6Y4+lafAL/eSiyQcuPzinmWNgNO2/olUF0Z2Dkn5i", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.2.min.js": "TX0gSQTdXTTeScqxj6PVQxTiRW8DOoGVwinyi1D3kxv7wuxQ02XkOxv0xwiypcAH"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.2.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"0c88fba5-beec-4a14-a78d-94184139342a":{"defs":[],"roots":{"references":[{"attributes":{},"id":"18905","type":"UnionRenderers"},{"attributes":{"source":{"id":"18791"}},"id":"18795","type":"CDSView"},{"attributes":{},"id":"18894","type":"Selection"},{"attributes":{"data_source":{"id":"18821"},"glyph":{"id":"18822"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18823"},"view":{"id":"18825"}},"id":"18824","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18743","type":"Line"},{"attributes":{"data":{},"selected":{"id":"18912"},"selection_policy":{"id":"18913"}},"id":"18826","type":"ColumnDataSource"},{"attributes":{"data":{},"selected":{"id":"18918"},"selection_policy":{"id":"18919"}},"id":"18841","type":"ColumnDataSource"},{"attributes":{},"id":"18922","type":"Selection"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18837","type":"Line"},{"attributes":{"data_source":{"id":"18816"},"glyph":{"id":"18817"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18818"},"view":{"id":"18820"}},"id":"18819","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"18924"},"selection_policy":{"id":"18925"}},"id":"18856","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18822","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18802","type":"Line"},{"attributes":{"bounds":"auto","min_interval":1},"id":"18863","type":"DataRange1d"},{"attributes":{"label":{"value":"Centered"},"renderers":[{"id":"18804"},{"id":"18809"},{"id":"18814"},{"id":"18819"},{"id":"18824"},{"id":"18829"},{"id":"18834"},{"id":"18839"},{"id":"18844"},{"id":"18849"},{"id":"18854"},{"id":"18859"}]},"id":"18869","type":"LegendItem"},{"attributes":{"children":[{"id":"18929"},{"id":"18927"}]},"id":"18930","type":"Column"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18833","type":"Line"},{"attributes":{},"id":"18725","type":"WheelZoomTool"},{"attributes":{},"id":"18882","type":"Selection"},{"attributes":{"overlay":{"id":"18730"}},"id":"18724","type":"BoxZoomTool"},{"attributes":{"source":{"id":"18821"}},"id":"18825","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18823","type":"Line"},{"attributes":{"toolbars":[{"id":"18732"}],"tools":[{"id":"18722"},{"id":"18723"},{"id":"18724"},{"id":"18725"},{"id":"18726"},{"id":"18727"},{"id":"18728"},{"id":"18729"}]},"id":"18928","type":"ProxyToolbar"},{"attributes":{"data_source":{"id":"18746"},"glyph":{"id":"18747"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18748"},"view":{"id":"18750"}},"id":"18749","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18806"}},"id":"18810","type":"CDSView"},{"attributes":{"above":[{"id":"18867"}],"below":[{"id":"18714"}],"center":[{"id":"18717"},{"id":"18721"}],"height":348,"left":[{"id":"18718"}],"outline_line_color":null,"output_backend":"webgl","renderers":[{"id":"18744"},{"id":"18749"},{"id":"18754"},{"id":"18759"},{"id":"18764"},{"id":"18769"},{"id":"18774"},{"id":"18779"},{"id":"18784"},{"id":"18789"},{"id":"18794"},{"id":"18799"},{"id":"18804"},{"id":"18809"},{"id":"18814"},{"id":"18819"},{"id":"18824"},{"id":"18829"},{"id":"18834"},{"id":"18839"},{"id":"18844"},{"id":"18849"},{"id":"18854"},{"id":"18859"}],"title":{"id":"18861"},"toolbar":{"id":"18732"},"toolbar_location":null,"width":450,"x_range":{"id":"18863"},"x_scale":{"id":"18710"},"y_range":{"id":"18864"},"y_scale":{"id":"18712"}},"id":"18705","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18808","type":"Line"},{"attributes":{},"id":"18917","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"18813","type":"Circle"},{"attributes":{},"id":"18883","type":"UnionRenderers"},{"attributes":{},"id":"18910","type":"Selection"},{"attributes":{"ticks":[1.275]},"id":"18865","type":"FixedTicker"},{"attributes":{},"id":"18914","type":"Selection"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18832","type":"Line"},{"attributes":{"data":{"x":[2.292119984640912,6.479187946875486],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"18898"},"selection_policy":{"id":"18899"}},"id":"18791","type":"ColumnDataSource"},{"attributes":{},"id":"18921","type":"UnionRenderers"},{"attributes":{},"id":"18727","type":"UndoTool"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18807","type":"Line"},{"attributes":{},"id":"18919","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18731","type":"PolyAnnotation"},{"attributes":{"source":{"id":"18826"}},"id":"18830","type":"CDSView"},{"attributes":{"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"18884"},"selection_policy":{"id":"18885"}},"id":"18756","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18853","type":"Line"},{"attributes":{},"id":"18874","type":"BasicTickFormatter"},{"attributes":{"data":{},"selected":{"id":"18900"},"selection_policy":{"id":"18901"}},"id":"18796","type":"ColumnDataSource"},{"attributes":{"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"18910"},"selection_policy":{"id":"18911"}},"id":"18821","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"18836"},"glyph":{"id":"18837"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18838"},"view":{"id":"18840"}},"id":"18839","type":"GlyphRenderer"},{"attributes":{"bounds":"auto","end":3.4499999999999997,"min_interval":2,"start":-0.8999999999999999},"id":"18864","type":"DataRange1d"},{"attributes":{"data_source":{"id":"18806"},"glyph":{"id":"18807"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18808"},"view":{"id":"18810"}},"id":"18809","type":"GlyphRenderer"},{"attributes":{},"id":"18878","type":"Selection"},{"attributes":{"data_source":{"id":"18851"},"glyph":{"id":"18852"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18853"},"view":{"id":"18855"}},"id":"18854","type":"GlyphRenderer"},{"attributes":{"data":{"x":[2.454317217804662,6.859709821773685],"y":[0,0]},"selected":{"id":"18880"},"selection_policy":{"id":"18881"}},"id":"18746","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18856"}},"id":"18860","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"18906"},"selection_policy":{"id":"18907"}},"id":"18811","type":"ColumnDataSource"},{"attributes":{},"id":"18881","type":"UnionRenderers"},{"attributes":{"source":{"id":"18741"}},"id":"18745","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18848","type":"Line"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"18797","type":"Circle"},{"attributes":{"source":{"id":"18831"}},"id":"18835","type":"CDSView"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"18857","type":"Circle"},{"attributes":{},"id":"18895","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18803","type":"Line"},{"attributes":{"data_source":{"id":"18831"},"glyph":{"id":"18832"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18833"},"view":{"id":"18835"}},"id":"18834","type":"GlyphRenderer"},{"attributes":{},"id":"18915","type":"UnionRenderers"},{"attributes":{},"id":"18909","type":"UnionRenderers"},{"attributes":{},"id":"18920","type":"Selection"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18747","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18748","type":"Line"},{"attributes":{},"id":"18924","type":"Selection"},{"attributes":{"data_source":{"id":"18811"},"glyph":{"id":"18812"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18813"},"view":{"id":"18815"}},"id":"18814","type":"GlyphRenderer"},{"attributes":{},"id":"18916","type":"Selection"},{"attributes":{"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"18920"},"selection_policy":{"id":"18921"}},"id":"18846","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18818","type":"Line"},{"attributes":{"children":[[{"id":"18705"},0,0]]},"id":"18927","type":"GridBox"},{"attributes":{"data_source":{"id":"18846"},"glyph":{"id":"18847"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18848"},"view":{"id":"18850"}},"id":"18849","type":"GlyphRenderer"},{"attributes":{},"id":"18880","type":"Selection"},{"attributes":{},"id":"18722","type":"ResetTool"},{"attributes":{},"id":"18872","type":"AllLabels"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18793","type":"Line"},{"attributes":{},"id":"18913","type":"UnionRenderers"},{"attributes":{"source":{"id":"18841"}},"id":"18845","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18817","type":"Line"},{"attributes":{"data_source":{"id":"18826"},"glyph":{"id":"18827"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18828"},"view":{"id":"18830"}},"id":"18829","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"18798","type":"Circle"},{"attributes":{"overlay":{"id":"18731"}},"id":"18726","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"18791"},"glyph":{"id":"18792"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18793"},"view":{"id":"18795"}},"id":"18794","type":"GlyphRenderer"},{"attributes":{},"id":"18723","type":"PanTool"},{"attributes":{"source":{"id":"18816"}},"id":"18820","type":"CDSView"},{"attributes":{},"id":"18908","type":"Selection"},{"attributes":{},"id":"18728","type":"SaveTool"},{"attributes":{},"id":"18871","type":"BasicTickFormatter"},{"attributes":{"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"18904"},"selection_policy":{"id":"18905"}},"id":"18806","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18846"}},"id":"18850","type":"CDSView"},{"attributes":{"label":{"value":"Non Centered"},"renderers":[{"id":"18744"},{"id":"18749"},{"id":"18754"},{"id":"18759"},{"id":"18764"},{"id":"18769"},{"id":"18774"},{"id":"18779"},{"id":"18784"},{"id":"18789"},{"id":"18794"},{"id":"18799"}]},"id":"18868","type":"LegendItem"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"18842","type":"Circle"},{"attributes":{},"id":"18923","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"18843","type":"Circle"},{"attributes":{"active_multi":null,"tools":[{"id":"18722"},{"id":"18723"},{"id":"18724"},{"id":"18725"},{"id":"18726"},{"id":"18727"},{"id":"18728"},{"id":"18729"}]},"id":"18732","type":"Toolbar"},{"attributes":{"source":{"id":"18836"}},"id":"18840","type":"CDSView"},{"attributes":{"source":{"id":"18796"}},"id":"18800","type":"CDSView"},{"attributes":{"data_source":{"id":"18841"},"glyph":{"id":"18842"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18843"},"view":{"id":"18845"}},"id":"18844","type":"GlyphRenderer"},{"attributes":{},"id":"18875","type":"AllLabels"},{"attributes":{"source":{"id":"18801"}},"id":"18805","type":"CDSView"},{"attributes":{},"id":"18879","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"18928"},"toolbar_location":"above"},"id":"18929","type":"ToolbarBox"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18852","type":"Line"},{"attributes":{},"id":"18911","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"18858","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18730","type":"BoxAnnotation"},{"attributes":{"source":{"id":"18811"}},"id":"18815","type":"CDSView"},{"attributes":{"data_source":{"id":"18796"},"glyph":{"id":"18797"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18798"},"view":{"id":"18800"}},"id":"18799","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18838","type":"Line"},{"attributes":{"source":{"id":"18786"}},"id":"18790","type":"CDSView"},{"attributes":{"data_source":{"id":"18856"},"glyph":{"id":"18857"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18858"},"view":{"id":"18860"}},"id":"18859","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"18908"},"selection_policy":{"id":"18909"}},"id":"18816","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18851"}},"id":"18855","type":"CDSView"},{"attributes":{},"id":"18918","type":"Selection"},{"attributes":{"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"18916"},"selection_policy":{"id":"18917"}},"id":"18836","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"18729","type":"HoverTool"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18792","type":"Line"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"18827","type":"Circle"},{"attributes":{},"id":"18925","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"18812","type":"Circle"},{"attributes":{},"id":"18912","type":"Selection"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18847","type":"Line"},{"attributes":{"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"18922"},"selection_policy":{"id":"18923"}},"id":"18851","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"18828","type":"Circle"},{"attributes":{"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"18914"},"selection_policy":{"id":"18915"}},"id":"18831","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"18776"},"glyph":{"id":"18777"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18778"},"view":{"id":"18780"}},"id":"18779","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18781"}},"id":"18785","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18762","type":"Line"},{"attributes":{"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"18892"},"selection_policy":{"id":"18893"}},"id":"18776","type":"ColumnDataSource"},{"attributes":{},"id":"18899","type":"UnionRenderers"},{"attributes":{"source":{"id":"18776"}},"id":"18780","type":"CDSView"},{"attributes":{},"id":"18906","type":"Selection"},{"attributes":{},"id":"18896","type":"Selection"},{"attributes":{"data_source":{"id":"18801"},"glyph":{"id":"18802"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18803"},"view":{"id":"18805"}},"id":"18804","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18746"}},"id":"18750","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18758","type":"Line"},{"attributes":{},"id":"18885","type":"UnionRenderers"},{"attributes":{"click_policy":"hide","items":[{"id":"18868"},{"id":"18869"}],"location":"top_left"},"id":"18867","type":"Legend"},{"attributes":{},"id":"18901","type":"UnionRenderers"},{"attributes":{},"id":"18887","type":"UnionRenderers"},{"attributes":{},"id":"18715","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"18782","type":"Circle"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18777","type":"Line"},{"attributes":{},"id":"18889","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"18752","type":"Circle"},{"attributes":{"source":{"id":"18751"}},"id":"18755","type":"CDSView"},{"attributes":{"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"18890"},"selection_policy":{"id":"18891"}},"id":"18771","type":"ColumnDataSource"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18742","type":"Line"},{"attributes":{},"id":"18886","type":"Selection"},{"attributes":{},"id":"18904","type":"Selection"},{"attributes":{"data_source":{"id":"18786"},"glyph":{"id":"18787"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18788"},"view":{"id":"18790"}},"id":"18789","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"18878"},"selection_policy":{"id":"18879"}},"id":"18741","type":"ColumnDataSource"},{"attributes":{"data":{},"selected":{"id":"18894"},"selection_policy":{"id":"18895"}},"id":"18781","type":"ColumnDataSource"},{"attributes":{},"id":"18900","type":"Selection"},{"attributes":{"data_source":{"id":"18756"},"glyph":{"id":"18757"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18758"},"view":{"id":"18760"}},"id":"18759","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"18888"},"selection_policy":{"id":"18889"}},"id":"18766","type":"ColumnDataSource"},{"attributes":{},"id":"18902","type":"Selection"},{"attributes":{},"id":"18898","type":"Selection"},{"attributes":{"source":{"id":"18771"}},"id":"18775","type":"CDSView"},{"attributes":{},"id":"18710","type":"LinearScale"},{"attributes":{"source":{"id":"18766"}},"id":"18770","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18772","type":"Line"},{"attributes":{},"id":"18892","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"18783","type":"Circle"},{"attributes":{},"id":"18884","type":"Selection"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"18767","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"18768","type":"Circle"},{"attributes":{},"id":"18712","type":"LinearScale"},{"attributes":{"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"18896"},"selection_policy":{"id":"18897"}},"id":"18786","type":"ColumnDataSource"},{"attributes":{},"id":"18907","type":"UnionRenderers"},{"attributes":{},"id":"18893","type":"UnionRenderers"},{"attributes":{},"id":"18890","type":"Selection"},{"attributes":{"formatter":{"id":"18871"},"major_label_overrides":{"1.275":"mu"},"major_label_policy":{"id":"18872"},"ticker":{"id":"18865"}},"id":"18718","type":"LinearAxis"},{"attributes":{"data_source":{"id":"18741"},"glyph":{"id":"18742"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18743"},"view":{"id":"18745"}},"id":"18744","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18787","type":"Line"},{"attributes":{"text":"94.0% HDI"},"id":"18861","type":"Title"},{"attributes":{"data_source":{"id":"18751"},"glyph":{"id":"18752"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18753"},"view":{"id":"18755"}},"id":"18754","type":"GlyphRenderer"},{"attributes":{},"id":"18888","type":"Selection"},{"attributes":{"source":{"id":"18761"}},"id":"18765","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18773","type":"Line"},{"attributes":{},"id":"18891","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18763","type":"Line"},{"attributes":{},"id":"18897","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"18761"},"glyph":{"id":"18762"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18763"},"view":{"id":"18765"}},"id":"18764","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18778","type":"Line"},{"attributes":{"data_source":{"id":"18771"},"glyph":{"id":"18772"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18773"},"view":{"id":"18775"}},"id":"18774","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18788","type":"Line"},{"attributes":{"axis":{"id":"18718"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"18721","type":"Grid"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18757","type":"Line"},{"attributes":{"source":{"id":"18756"}},"id":"18760","type":"CDSView"},{"attributes":{},"id":"18903","type":"UnionRenderers"},{"attributes":{"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"18902"},"selection_policy":{"id":"18903"}},"id":"18801","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"18714"},"ticker":null},"id":"18717","type":"Grid"},{"attributes":{"data_source":{"id":"18766"},"glyph":{"id":"18767"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18768"},"view":{"id":"18770"}},"id":"18769","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"18882"},"selection_policy":{"id":"18883"}},"id":"18751","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"18753","type":"Circle"},{"attributes":{"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"18886"},"selection_policy":{"id":"18887"}},"id":"18761","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"18781"},"glyph":{"id":"18782"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18783"},"view":{"id":"18785"}},"id":"18784","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"18874"},"major_label_policy":{"id":"18875"},"ticker":{"id":"18715"}},"id":"18714","type":"LinearAxis"}],"root_ids":["18930"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"0c88fba5-beec-4a14-a78d-94184139342a","root_ids":["18930"],"roots":{"18930":"fadba059-f196-4687-98a7-382b9cc7f3c2"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();