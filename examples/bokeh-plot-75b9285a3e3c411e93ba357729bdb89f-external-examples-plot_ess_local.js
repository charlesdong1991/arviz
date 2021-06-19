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
    
      
      
    
      var element = document.getElementById("4598d63a-a5fa-4d8f-86a5-20075cebe722");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4598d63a-a5fa-4d8f-86a5-20075cebe722' but no matching script tag was found.")
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
                    
                  var docs_json = '{"ea0eb796-bb3d-4c95-8a6b-f084719f813a":{"defs":[],"roots":{"references":[{"attributes":{},"id":"18542","type":"Selection"},{"attributes":{"toolbar":{"id":"18546"},"toolbar_location":"above"},"id":"18547","type":"ToolbarBox"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"18528","type":"Span"},{"attributes":{"axis":{"id":"18491"},"ticker":null},"id":"18494","type":"Grid"},{"attributes":{"overlay":{"id":"18508"}},"id":"18503","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"18518"},"glyph":{"id":"18519"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18520"},"view":{"id":"18522"}},"id":"18521","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18540"},"selection_policy":{"id":"18541"}},"id":"18518","type":"ColumnDataSource"},{"attributes":{},"id":"18485","type":"DataRange1d"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"18523","type":"Scatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18508","type":"PolyAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18519","type":"Circle"},{"attributes":{"callback":null},"id":"18506","type":"HoverTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18507","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"18507"}},"id":"18501","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"18491"}],"center":[{"id":"18494"},{"id":"18498"}],"height":500,"left":[{"id":"18495"}],"output_backend":"webgl","renderers":[{"id":"18521"},{"id":"18525"},{"id":"18527"},{"id":"18528"}],"title":{"id":"18529"},"toolbar":{"id":"18509"},"toolbar_location":null,"width":500,"x_range":{"id":"18483"},"x_scale":{"id":"18487"},"y_range":{"id":"18485"},"y_scale":{"id":"18489"}},"id":"18482","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18536","type":"BasicTickFormatter"},{"attributes":{},"id":"18541","type":"UnionRenderers"},{"attributes":{},"id":"18533","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"18524"},"glyph":{"id":"18523"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"18526"}},"id":"18525","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"18527","type":"Span"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18520","type":"Circle"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"18533"},"major_label_policy":{"id":"18534"},"ticker":{"id":"18496"}},"id":"18495","type":"LinearAxis"},{"attributes":{"text":"mu"},"id":"18529","type":"Title"},{"attributes":{},"id":"18499","type":"ResetTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"18536"},"major_label_policy":{"id":"18537"},"ticker":{"id":"18492"}},"id":"18491","type":"LinearAxis"},{"attributes":{},"id":"18492","type":"BasicTicker"},{"attributes":{},"id":"18505","type":"SaveTool"},{"attributes":{"children":[{"id":"18547"},{"id":"18545"}]},"id":"18548","type":"Column"},{"attributes":{"toolbars":[{"id":"18509"}],"tools":[{"id":"18499"},{"id":"18500"},{"id":"18501"},{"id":"18502"},{"id":"18503"},{"id":"18504"},{"id":"18505"},{"id":"18506"}]},"id":"18546","type":"ProxyToolbar"},{"attributes":{},"id":"18500","type":"PanTool"},{"attributes":{},"id":"18504","type":"UndoTool"},{"attributes":{"active_multi":null,"tools":[{"id":"18499"},{"id":"18500"},{"id":"18501"},{"id":"18502"},{"id":"18503"},{"id":"18504"},{"id":"18505"},{"id":"18506"}]},"id":"18509","type":"Toolbar"},{"attributes":{},"id":"18489","type":"LinearScale"},{"attributes":{},"id":"18540","type":"Selection"},{"attributes":{},"id":"18534","type":"AllLabels"},{"attributes":{"source":{"id":"18518"}},"id":"18522","type":"CDSView"},{"attributes":{"axis":{"id":"18495"},"dimension":1,"ticker":null},"id":"18498","type":"Grid"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"18542"},"selection_policy":{"id":"18543"}},"id":"18524","type":"ColumnDataSource"},{"attributes":{},"id":"18487","type":"LinearScale"},{"attributes":{},"id":"18483","type":"DataRange1d"},{"attributes":{},"id":"18502","type":"WheelZoomTool"},{"attributes":{},"id":"18543","type":"UnionRenderers"},{"attributes":{},"id":"18537","type":"AllLabels"},{"attributes":{"source":{"id":"18524"}},"id":"18526","type":"CDSView"},{"attributes":{},"id":"18496","type":"BasicTicker"},{"attributes":{"children":[[{"id":"18482"},0,0]]},"id":"18545","type":"GridBox"}],"root_ids":["18548"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"ea0eb796-bb3d-4c95-8a6b-f084719f813a","root_ids":["18548"],"roots":{"18548":"4598d63a-a5fa-4d8f-86a5-20075cebe722"}}];
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