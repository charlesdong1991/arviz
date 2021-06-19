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
    
      
      
    
      var element = document.getElementById("6ce543f1-6b72-4059-b6c8-e740c6e1a8d7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6ce543f1-6b72-4059-b6c8-e740c6e1a8d7' but no matching script tag was found.")
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
                    
                  var docs_json = '{"a480aecd-e3b1-481a-a855-569841ebd07b":{"defs":[],"roots":{"references":[{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15784","type":"MultiLine"},{"attributes":{"formatter":{"id":"15795"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"15796"},"ticker":{"id":"15765"}},"id":"15742","type":"LinearAxis"},{"attributes":{"toolbar":{"id":"15814"},"toolbar_location":"above"},"id":"15815","type":"ToolbarBox"},{"attributes":{},"id":"15752","type":"SaveTool"},{"attributes":{},"id":"15794","type":"Title"},{"attributes":{},"id":"15795","type":"BasicTickFormatter"},{"attributes":{},"id":"15730","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15769","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15779","type":"Circle"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15788","type":"Circle"},{"attributes":{},"id":"15736","type":"LinearScale"},{"attributes":{},"id":"15808","type":"Selection"},{"attributes":{"end":0.5,"start":-1.5},"id":"15732","type":"DataRange1d"},{"attributes":{"overlay":{"id":"15754"}},"id":"15748","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"15742"},"dimension":1,"ticker":null},"id":"15745","type":"Grid"},{"attributes":{},"id":"15799","type":"AllLabels"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsApBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15806"},"selection_policy":{"id":"15807"}},"id":"15777","type":"ColumnDataSource"},{"attributes":{},"id":"15807","type":"UnionRenderers"},{"attributes":{},"id":"15739","type":"BasicTicker"},{"attributes":{},"id":"15811","type":"UnionRenderers"},{"attributes":{},"id":"15810","type":"Selection"},{"attributes":{"children":[{"id":"15815"},{"id":"15813"}]},"id":"15816","type":"Column"},{"attributes":{"toolbars":[{"id":"15756"}],"tools":[{"id":"15746"},{"id":"15747"},{"id":"15748"},{"id":"15749"},{"id":"15750"},{"id":"15751"},{"id":"15752"},{"id":"15753"}]},"id":"15814","type":"ProxyToolbar"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.383537134836743]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"15808"},"selection_policy":{"id":"15809"}},"id":"15782","type":"ColumnDataSource"},{"attributes":{},"id":"15809","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15789","type":"Circle"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15783","type":"MultiLine"},{"attributes":{"axis":{"id":"15738"},"ticker":null},"id":"15741","type":"Grid"},{"attributes":{},"id":"15749","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"15782"},"glyph":{"id":"15783"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15784"},"view":{"id":"15786"}},"id":"15785","type":"GlyphRenderer"},{"attributes":{"source":{"id":"15767"}},"id":"15771","type":"CDSView"},{"attributes":{"data_source":{"id":"15772"},"glyph":{"id":"15773"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15774"},"view":{"id":"15776"}},"id":"15775","type":"GlyphRenderer"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"15765","type":"FixedTicker"},{"attributes":{"axis_label":"Log","formatter":{"id":"15798"},"major_label_policy":{"id":"15799"},"ticker":{"id":"15739"}},"id":"15738","type":"LinearAxis"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"15792","type":"Span"},{"attributes":{},"id":"15751","type":"UndoTool"},{"attributes":{},"id":"15734","type":"LinearScale"},{"attributes":{"source":{"id":"15787"}},"id":"15791","type":"CDSView"},{"attributes":{"data_source":{"id":"15767"},"glyph":{"id":"15768"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15769"},"view":{"id":"15771"}},"id":"15770","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"15738"}],"center":[{"id":"15741"},{"id":"15745"}],"height":500,"left":[{"id":"15742"}],"output_backend":"webgl","renderers":[{"id":"15770"},{"id":"15775"},{"id":"15780"},{"id":"15785"},{"id":"15790"},{"id":"15792"}],"title":{"id":"15794"},"toolbar":{"id":"15756"},"toolbar_location":null,"width":500,"x_range":{"id":"15730"},"x_scale":{"id":"15734"},"y_range":{"id":"15732"},"y_scale":{"id":"15736"}},"id":"15729","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"15802","type":"Selection"},{"attributes":{"overlay":{"id":"15755"}},"id":"15750","type":"LassoSelectTool"},{"attributes":{},"id":"15747","type":"PanTool"},{"attributes":{"children":[[{"id":"15729"},0,0]]},"id":"15813","type":"GridBox"},{"attributes":{"source":{"id":"15772"}},"id":"15776","type":"CDSView"},{"attributes":{"data_source":{"id":"15787"},"glyph":{"id":"15788"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15789"},"view":{"id":"15791"}},"id":"15790","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15773","type":"MultiLine"},{"attributes":{"data":{"xs":[[-30.896420573800544,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"15804"},"selection_policy":{"id":"15805"}},"id":"15772","type":"ColumnDataSource"},{"attributes":{},"id":"15806","type":"Selection"},{"attributes":{},"id":"15798","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"15777"}},"id":"15781","type":"CDSView"},{"attributes":{},"id":"15804","type":"Selection"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15778","type":"Circle"},{"attributes":{},"id":"15746","type":"ResetTool"},{"attributes":{},"id":"15803","type":"UnionRenderers"},{"attributes":{"active_multi":null,"tools":[{"id":"15746"},{"id":"15747"},{"id":"15748"},{"id":"15749"},{"id":"15750"},{"id":"15751"},{"id":"15752"},{"id":"15753"}]},"id":"15756","type":"Toolbar"},{"attributes":{"data":{"x":{"__ndarray__":"KQWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"15802"},"selection_policy":{"id":"15803"}},"id":"15767","type":"ColumnDataSource"},{"attributes":{},"id":"15805","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15768","type":"Scatter"},{"attributes":{"data_source":{"id":"15777"},"glyph":{"id":"15778"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15779"},"view":{"id":"15781"}},"id":"15780","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15774","type":"MultiLine"},{"attributes":{"callback":null},"id":"15753","type":"HoverTool"},{"attributes":{},"id":"15796","type":"AllLabels"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15810"},"selection_policy":{"id":"15811"}},"id":"15787","type":"ColumnDataSource"},{"attributes":{"source":{"id":"15782"}},"id":"15786","type":"CDSView"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"15755","type":"PolyAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"15754","type":"BoxAnnotation"}],"root_ids":["15816"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"a480aecd-e3b1-481a-a855-569841ebd07b","root_ids":["15816"],"roots":{"15816":"6ce543f1-6b72-4059-b6c8-e740c6e1a8d7"}}];
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