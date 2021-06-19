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
    
      
      
    
      var element = document.getElementById("3a4f7d8a-dae5-4507-a25c-b003d4cf7095");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '3a4f7d8a-dae5-4507-a25c-b003d4cf7095' but no matching script tag was found.")
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
                    
                  var docs_json = '{"002a5d18-6550-424f-9571-99d60897b025":{"defs":[],"roots":{"references":[{"attributes":{},"id":"14991","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"14970"}},"id":"14965","type":"LassoSelectTool"},{"attributes":{"active_multi":null,"tools":[{"id":"14961"},{"id":"14962"},{"id":"14963"},{"id":"14964"},{"id":"14965"},{"id":"14966"},{"id":"14967"},{"id":"14968"}]},"id":"14971","type":"Toolbar"},{"attributes":{},"id":"14951","type":"LinearScale"},{"attributes":{},"id":"14958","type":"BasicTicker"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"14995"},"selection_policy":{"id":"14996"}},"id":"14981","type":"ColumnDataSource"},{"attributes":{},"id":"14945","type":"DataRange1d"},{"attributes":{},"id":"14988","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"15000"},{"id":"14998"}]},"id":"15001","type":"Column"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"14988"},"major_label_policy":{"id":"14989"},"ticker":{"id":"14958"}},"id":"14957","type":"LinearAxis"},{"attributes":{},"id":"14967","type":"SaveTool"},{"attributes":{"below":[{"id":"14953"}],"center":[{"id":"14956"},{"id":"14960"}],"height":288,"left":[{"id":"14957"}],"output_backend":"webgl","renderers":[{"id":"14982"}],"title":{"id":"14984"},"toolbar":{"id":"14971"},"toolbar_location":null,"width":432,"x_range":{"id":"14945"},"x_scale":{"id":"14949"},"y_range":{"id":"14947"},"y_scale":{"id":"14951"}},"id":"14944","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14989","type":"AllLabels"},{"attributes":{},"id":"14964","type":"WheelZoomTool"},{"attributes":{},"id":"14961","type":"ResetTool"},{"attributes":{},"id":"14954","type":"BasicTicker"},{"attributes":{},"id":"14966","type":"UndoTool"},{"attributes":{"text":"centered model - non centered model"},"id":"14984","type":"Title"},{"attributes":{"toolbars":[{"id":"14971"}],"tools":[{"id":"14961"},{"id":"14962"},{"id":"14963"},{"id":"14964"},{"id":"14965"},{"id":"14966"},{"id":"14967"},{"id":"14968"}]},"id":"14999","type":"ProxyToolbar"},{"attributes":{},"id":"14949","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"14969","type":"BoxAnnotation"},{"attributes":{},"id":"14996","type":"UnionRenderers"},{"attributes":{"axis":{"id":"14953"},"ticker":null},"id":"14956","type":"Grid"},{"attributes":{},"id":"14947","type":"DataRange1d"},{"attributes":{"data_source":{"id":"14981"},"glyph":{"id":"14980"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"14983"}},"id":"14982","type":"GlyphRenderer"},{"attributes":{},"id":"14995","type":"Selection"},{"attributes":{},"id":"14962","type":"PanTool"},{"attributes":{"callback":null},"id":"14968","type":"HoverTool"},{"attributes":{"toolbar":{"id":"14999"},"toolbar_location":"above"},"id":"15000","type":"ToolbarBox"},{"attributes":{"children":[[{"id":"14944"},0,0]]},"id":"14998","type":"GridBox"},{"attributes":{},"id":"14992","type":"AllLabels"},{"attributes":{"overlay":{"id":"14969"}},"id":"14963","type":"BoxZoomTool"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"14980","type":"Scatter"},{"attributes":{"formatter":{"id":"14991"},"major_label_policy":{"id":"14992"},"ticker":{"id":"14954"}},"id":"14953","type":"LinearAxis"},{"attributes":{"source":{"id":"14981"}},"id":"14983","type":"CDSView"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"14970","type":"PolyAnnotation"},{"attributes":{"axis":{"id":"14957"},"dimension":1,"ticker":null},"id":"14960","type":"Grid"}],"root_ids":["15001"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"002a5d18-6550-424f-9571-99d60897b025","root_ids":["15001"],"roots":{"15001":"3a4f7d8a-dae5-4507-a25c-b003d4cf7095"}}];
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