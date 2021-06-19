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
    
      
      
    
      var element = document.getElementById("7066c212-879f-4dc1-a552-ce76830d096d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '7066c212-879f-4dc1-a552-ce76830d096d' but no matching script tag was found.")
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
                    
                  var docs_json = '{"b58d496a-4c62-4d14-84ca-0ec66da39086":{"defs":[],"roots":{"references":[{"attributes":{},"id":"18084","type":"AllLabels"},{"attributes":{},"id":"18050","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"18072","type":"Scatter"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"18080"},"major_label_policy":{"id":"18081"},"ticker":{"id":"18050"}},"id":"18049","type":"LinearAxis"},{"attributes":{"children":[[{"id":"18036"},0,0]]},"id":"18090","type":"GridBox"},{"attributes":{},"id":"18087","type":"Selection"},{"attributes":{},"id":"18080","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"18083"},"major_label_policy":{"id":"18084"},"ticker":{"id":"18046"}},"id":"18045","type":"LinearAxis"},{"attributes":{"axis":{"id":"18049"},"dimension":1,"ticker":null},"id":"18052","type":"Grid"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18062","type":"PolyAnnotation"},{"attributes":{},"id":"18041","type":"LinearScale"},{"attributes":{"source":{"id":"18073"}},"id":"18075","type":"CDSView"},{"attributes":{"data_source":{"id":"18073"},"glyph":{"id":"18072"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"18075"}},"id":"18074","type":"GlyphRenderer"},{"attributes":{},"id":"18058","type":"UndoTool"},{"attributes":{"overlay":{"id":"18061"}},"id":"18055","type":"BoxZoomTool"},{"attributes":{"active_multi":null,"tools":[{"id":"18053"},{"id":"18054"},{"id":"18055"},{"id":"18056"},{"id":"18057"},{"id":"18058"},{"id":"18059"},{"id":"18060"}]},"id":"18063","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18061","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"18062"}},"id":"18057","type":"LassoSelectTool"},{"attributes":{},"id":"18083","type":"BasicTickFormatter"},{"attributes":{"toolbars":[{"id":"18063"}],"tools":[{"id":"18053"},{"id":"18054"},{"id":"18055"},{"id":"18056"},{"id":"18057"},{"id":"18058"},{"id":"18059"},{"id":"18060"}]},"id":"18091","type":"ProxyToolbar"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"18087"},"selection_policy":{"id":"18088"}},"id":"18073","type":"ColumnDataSource"},{"attributes":{},"id":"18054","type":"PanTool"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"18076","type":"Title"},{"attributes":{"axis":{"id":"18045"},"ticker":null},"id":"18048","type":"Grid"},{"attributes":{"callback":null},"id":"18060","type":"HoverTool"},{"attributes":{},"id":"18046","type":"BasicTicker"},{"attributes":{},"id":"18043","type":"LinearScale"},{"attributes":{},"id":"18081","type":"AllLabels"},{"attributes":{},"id":"18088","type":"UnionRenderers"},{"attributes":{},"id":"18039","type":"DataRange1d"},{"attributes":{},"id":"18053","type":"ResetTool"},{"attributes":{"toolbar":{"id":"18091"},"toolbar_location":"above"},"id":"18092","type":"ToolbarBox"},{"attributes":{},"id":"18059","type":"SaveTool"},{"attributes":{},"id":"18037","type":"DataRange1d"},{"attributes":{"below":[{"id":"18045"}],"center":[{"id":"18048"},{"id":"18052"}],"height":288,"left":[{"id":"18049"}],"output_backend":"webgl","renderers":[{"id":"18074"}],"title":{"id":"18076"},"toolbar":{"id":"18063"},"toolbar_location":null,"width":432,"x_range":{"id":"18037"},"x_scale":{"id":"18041"},"y_range":{"id":"18039"},"y_scale":{"id":"18043"}},"id":"18036","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18056","type":"WheelZoomTool"},{"attributes":{"children":[{"id":"18092"},{"id":"18090"}]},"id":"18093","type":"Column"}],"root_ids":["18093"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"b58d496a-4c62-4d14-84ca-0ec66da39086","root_ids":["18093"],"roots":{"18093":"7066c212-879f-4dc1-a552-ce76830d096d"}}];
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