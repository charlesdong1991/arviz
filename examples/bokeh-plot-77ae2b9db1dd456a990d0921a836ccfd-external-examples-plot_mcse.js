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
    
      
      
    
      var element = document.getElementById("927ddde2-a9d4-44ed-a525-d4b47d374e5e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '927ddde2-a9d4-44ed-a525-d4b47d374e5e' but no matching script tag was found.")
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
                    
                  var docs_json = '{"7b7edf9c-c25e-4d6e-8a76-cb54cd772330":{"defs":[],"roots":{"references":[{"attributes":{},"id":"37282","type":"BasicTickFormatter"},{"attributes":{"active_multi":null,"tools":[{"id":"37180"},{"id":"37181"},{"id":"37182"},{"id":"37183"},{"id":"37184"},{"id":"37185"},{"id":"37186"},{"id":"37187"}]},"id":"37190","type":"Toolbar"},{"attributes":{},"id":"37272","type":"Selection"},{"attributes":{"toolbar":{"id":"37292"},"toolbar_location":"above"},"id":"37293","type":"ToolbarBox"},{"attributes":{},"id":"37283","type":"AllLabels"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"37268"},"major_label_policy":{"id":"37269"},"ticker":{"id":"37173"}},"id":"37172","type":"LinearAxis"},{"attributes":{"source":{"id":"37235"}},"id":"37239","type":"CDSView"},{"attributes":{"toolbars":[{"id":"37190"},{"id":"37226"}],"tools":[{"id":"37180"},{"id":"37181"},{"id":"37182"},{"id":"37183"},{"id":"37184"},{"id":"37185"},{"id":"37186"},{"id":"37187"},{"id":"37216"},{"id":"37217"},{"id":"37218"},{"id":"37219"},{"id":"37220"},{"id":"37221"},{"id":"37222"},{"id":"37223"}]},"id":"37292","type":"ProxyToolbar"},{"attributes":{},"id":"37273","type":"UnionRenderers"},{"attributes":{"children":[{"id":"37293"},{"id":"37291"}]},"id":"37294","type":"Column"},{"attributes":{},"id":"37170","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37237","type":"Circle"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"37265"},"major_label_policy":{"id":"37266"},"ticker":{"id":"37177"}},"id":"37176","type":"LinearAxis"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"37282"},"major_label_policy":{"id":"37283"},"ticker":{"id":"37209"}},"id":"37208","type":"LinearAxis"},{"attributes":{"end":1,"start":-0.05},"id":"37202","type":"DataRange1d"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"37279"},"major_label_policy":{"id":"37280"},"ticker":{"id":"37213"}},"id":"37212","type":"LinearAxis"},{"attributes":{},"id":"37204","type":"LinearScale"},{"attributes":{},"id":"37206","type":"LinearScale"},{"attributes":{"callback":null},"id":"37223","type":"HoverTool"},{"attributes":{},"id":"37173","type":"BasicTicker"},{"attributes":{},"id":"37265","type":"BasicTickFormatter"},{"attributes":{},"id":"37209","type":"BasicTicker"},{"attributes":{},"id":"37274","type":"Selection"},{"attributes":{"axis":{"id":"37208"},"ticker":null},"id":"37211","type":"Grid"},{"attributes":{},"id":"37266","type":"AllLabels"},{"attributes":{"axis":{"id":"37212"},"dimension":1,"ticker":null},"id":"37215","type":"Grid"},{"attributes":{},"id":"37275","type":"UnionRenderers"},{"attributes":{},"id":"37213","type":"BasicTicker"},{"attributes":{"data_source":{"id":"37235"},"glyph":{"id":"37236"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37237"},"view":{"id":"37239"}},"id":"37238","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"37258"},"glyph":{"id":"37257"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"37260"}},"id":"37259","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"37224"}},"id":"37218","type":"BoxZoomTool"},{"attributes":{},"id":"37217","type":"PanTool"},{"attributes":{"overlay":{"id":"37189"}},"id":"37184","type":"LassoSelectTool"},{"attributes":{},"id":"37216","type":"ResetTool"},{"attributes":{},"id":"37222","type":"SaveTool"},{"attributes":{},"id":"37219","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"37225"}},"id":"37220","type":"LassoSelectTool"},{"attributes":{},"id":"37221","type":"UndoTool"},{"attributes":{"active_multi":null,"tools":[{"id":"37216"},{"id":"37217"},{"id":"37218"},{"id":"37219"},{"id":"37220"},{"id":"37221"},{"id":"37222"},{"id":"37223"}]},"id":"37226","type":"Toolbar"},{"attributes":{"axis":{"id":"37172"},"ticker":null},"id":"37175","type":"Grid"},{"attributes":{"callback":null},"id":"37187","type":"HoverTool"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"37242","type":"Span"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"37257","type":"Scatter"},{"attributes":{},"id":"37185","type":"UndoTool"},{"attributes":{"text":"tau"},"id":"37247","type":"Title"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"37240","type":"Span"},{"attributes":{"axis":{"id":"37176"},"dimension":1,"ticker":null},"id":"37179","type":"Grid"},{"attributes":{},"id":"37164","type":"DataRange1d"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"37241","type":"Span"},{"attributes":{},"id":"37200","type":"DataRange1d"},{"attributes":{},"id":"37286","type":"Selection"},{"attributes":{"overlay":{"id":"37188"}},"id":"37182","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37250","type":"Circle"},{"attributes":{},"id":"37181","type":"PanTool"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"37274"},"selection_policy":{"id":"37275"}},"id":"37244","type":"ColumnDataSource"},{"attributes":{},"id":"37180","type":"ResetTool"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"37286"},"selection_policy":{"id":"37287"}},"id":"37249","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"37172"}],"center":[{"id":"37175"},{"id":"37179"}],"height":500,"left":[{"id":"37176"}],"output_backend":"webgl","renderers":[{"id":"37238"},{"id":"37240"},{"id":"37241"},{"id":"37242"},{"id":"37245"}],"title":{"id":"37247"},"toolbar":{"id":"37190"},"toolbar_location":null,"width":500,"x_range":{"id":"37164"},"x_scale":{"id":"37168"},"y_range":{"id":"37166"},"y_scale":{"id":"37170"}},"id":"37163","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"37268","type":"BasicTickFormatter"},{"attributes":{},"id":"37186","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37236","type":"Circle"},{"attributes":{"source":{"id":"37244"}},"id":"37246","type":"CDSView"},{"attributes":{},"id":"37183","type":"WheelZoomTool"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"37243","type":"Scatter"},{"attributes":{},"id":"37177","type":"BasicTicker"},{"attributes":{},"id":"37269","type":"AllLabels"},{"attributes":{},"id":"37287","type":"UnionRenderers"},{"attributes":{"source":{"id":"37258"}},"id":"37260","type":"CDSView"},{"attributes":{"end":1,"start":-0.05},"id":"37166","type":"DataRange1d"},{"attributes":{"data_source":{"id":"37244"},"glyph":{"id":"37243"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"37246"}},"id":"37245","type":"GlyphRenderer"},{"attributes":{},"id":"37168","type":"LinearScale"},{"attributes":{"data_source":{"id":"37249"},"glyph":{"id":"37250"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37251"},"view":{"id":"37253"}},"id":"37252","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"37224","type":"BoxAnnotation"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"37288"},"selection_policy":{"id":"37289"}},"id":"37258","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"37255","type":"Span"},{"attributes":{"text":"mu"},"id":"37261","type":"Title"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"37254","type":"Span"},{"attributes":{"source":{"id":"37249"}},"id":"37253","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37251","type":"Circle"},{"attributes":{},"id":"37288","type":"Selection"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"37256","type":"Span"},{"attributes":{},"id":"37279","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"37188","type":"BoxAnnotation"},{"attributes":{},"id":"37280","type":"AllLabels"},{"attributes":{},"id":"37289","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"37225","type":"PolyAnnotation"},{"attributes":{"below":[{"id":"37208"}],"center":[{"id":"37211"},{"id":"37215"}],"height":500,"left":[{"id":"37212"}],"output_backend":"webgl","renderers":[{"id":"37252"},{"id":"37254"},{"id":"37255"},{"id":"37256"},{"id":"37259"}],"title":{"id":"37261"},"toolbar":{"id":"37226"},"toolbar_location":null,"width":500,"x_range":{"id":"37200"},"x_scale":{"id":"37204"},"y_range":{"id":"37202"},"y_scale":{"id":"37206"}},"id":"37199","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"37272"},"selection_policy":{"id":"37273"}},"id":"37235","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"37189","type":"PolyAnnotation"},{"attributes":{"children":[[{"id":"37163"},0,0],[{"id":"37199"},0,1]]},"id":"37291","type":"GridBox"}],"root_ids":["37294"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"7b7edf9c-c25e-4d6e-8a76-cb54cd772330","root_ids":["37294"],"roots":{"37294":"927ddde2-a9d4-44ed-a525-d4b47d374e5e"}}];
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