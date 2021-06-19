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
    
      
      
    
      var element = document.getElementById("847644a5-614c-46c6-be45-020c98ad1e8e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '847644a5-614c-46c6-be45-020c98ad1e8e' but no matching script tag was found.")
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
                    
                  var docs_json = '{"6f73fec4-4306-4d6c-9825-7ffb7baf591b":{"defs":[],"roots":{"references":[{"attributes":{"data_source":{"id":"43353"},"glyph":{"id":"43354"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43355"},"view":{"id":"43357"}},"id":"43356","type":"GlyphRenderer"},{"attributes":{"text":"tau"},"id":"43351","type":"Title"},{"attributes":{},"id":"43383","type":"AllLabels"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43354","type":"VBar"},{"attributes":{},"id":"43394","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"43281"}},"id":"43276","type":"LassoSelectTool"},{"attributes":{},"id":"43262","type":"LinearScale"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"43315","type":"PolyAnnotation"},{"attributes":{"overlay":{"id":"43280"}},"id":"43274","type":"BoxZoomTool"},{"attributes":{},"id":"43406","type":"Selection"},{"attributes":{},"id":"43272","type":"ResetTool"},{"attributes":{"callback":null},"id":"43313","type":"HoverTool"},{"attributes":{},"id":"43391","type":"Selection"},{"attributes":{},"id":"43277","type":"UndoTool"},{"attributes":{},"id":"43294","type":"LinearScale"},{"attributes":{},"id":"43273","type":"PanTool"},{"attributes":{},"id":"43275","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"43337"},"glyph":{"id":"43338"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43339"},"view":{"id":"43341"}},"id":"43340","type":"GlyphRenderer"},{"attributes":{},"id":"43382","type":"BasicTickFormatter"},{"attributes":{},"id":"43392","type":"UnionRenderers"},{"attributes":{"axis":{"id":"43268"},"dimension":1,"ticker":null},"id":"43271","type":"Grid"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43395"},"selection_policy":{"id":"43396"}},"id":"43343","type":"ColumnDataSource"},{"attributes":{},"id":"43413","type":"UnionRenderers"},{"attributes":{},"id":"43390","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"43325"},"glyph":{"id":"43326"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43327"},"view":{"id":"43329"}},"id":"43328","type":"GlyphRenderer"},{"attributes":{},"id":"43312","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"43314","type":"BoxAnnotation"},{"attributes":{},"id":"43256","type":"DataRange1d"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"43336","type":"Span"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43345","type":"VBar"},{"attributes":{"callback":null},"id":"43279","type":"HoverTool"},{"attributes":{},"id":"43306","type":"ResetTool"},{"attributes":{"data_source":{"id":"43331"},"glyph":{"id":"43332"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43333"},"view":{"id":"43335"}},"id":"43334","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"43343"},"glyph":{"id":"43344"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43345"},"view":{"id":"43347"}},"id":"43346","type":"GlyphRenderer"},{"attributes":{},"id":"43311","type":"UndoTool"},{"attributes":{},"id":"43386","type":"AllLabels"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43339","type":"VBar"},{"attributes":{"active_multi":null,"tools":[{"id":"43306"},{"id":"43307"},{"id":"43308"},{"id":"43309"},{"id":"43310"},{"id":"43311"},{"id":"43312"},{"id":"43313"}]},"id":"43316","type":"Toolbar"},{"attributes":{},"id":"43258","type":"DataRange1d"},{"attributes":{"overlay":{"id":"43314"}},"id":"43308","type":"BoxZoomTool"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43333","type":"VBar"},{"attributes":{"text":"mu"},"id":"43379","type":"Title"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"43385"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"43386"},"ticker":{"id":"43265"}},"id":"43264","type":"LinearAxis"},{"attributes":{"axis":{"id":"43302"},"dimension":1,"ticker":null},"id":"43305","type":"Grid"},{"attributes":{"source":{"id":"43325"}},"id":"43329","type":"CDSView"},{"attributes":{},"id":"43385","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"43331"}},"id":"43335","type":"CDSView"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"43402"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"43403"},"ticker":{"id":"43299"}},"id":"43298","type":"LinearAxis"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43332","type":"VBar"},{"attributes":{},"id":"43299","type":"BasicTicker"},{"attributes":{"axis":{"id":"43298"},"ticker":null},"id":"43301","type":"Grid"},{"attributes":{},"id":"43403","type":"AllLabels"},{"attributes":{"axis_label":"Chain","formatter":{"id":"43399"},"major_label_policy":{"id":"43400"},"ticker":{"id":"43377"}},"id":"43302","type":"LinearAxis"},{"attributes":{},"id":"43393","type":"Selection"},{"attributes":{},"id":"43402","type":"BasicTickFormatter"},{"attributes":{"active_multi":null,"tools":[{"id":"43272"},{"id":"43273"},{"id":"43274"},{"id":"43275"},{"id":"43276"},{"id":"43277"},{"id":"43278"},{"id":"43279"}]},"id":"43282","type":"Toolbar"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"43342","type":"Span"},{"attributes":{"children":[[{"id":"43255"},0,0],[{"id":"43291"},0,1]]},"id":"43415","type":"GridBox"},{"attributes":{"below":[{"id":"43264"}],"center":[{"id":"43267"},{"id":"43271"},{"id":"43330"},{"id":"43336"},{"id":"43342"},{"id":"43348"}],"height":331,"left":[{"id":"43268"}],"output_backend":"webgl","renderers":[{"id":"43328"},{"id":"43334"},{"id":"43340"},{"id":"43346"}],"title":{"id":"43351"},"toolbar":{"id":"43282"},"toolbar_location":null,"width":496,"x_range":{"id":"43256"},"x_scale":{"id":"43260"},"y_range":{"id":"43258"},"y_scale":{"id":"43262"}},"id":"43255","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"43307","type":"PanTool"},{"attributes":{"axis_label":"Chain","formatter":{"id":"43382"},"major_label_policy":{"id":"43383"},"ticker":{"id":"43349"}},"id":"43268","type":"LinearAxis"},{"attributes":{"ticks":[0,1,2,3]},"id":"43349","type":"FixedTicker"},{"attributes":{},"id":"43309","type":"WheelZoomTool"},{"attributes":{"source":{"id":"43337"}},"id":"43341","type":"CDSView"},{"attributes":{"source":{"id":"43343"}},"id":"43347","type":"CDSView"},{"attributes":{"overlay":{"id":"43315"}},"id":"43310","type":"LassoSelectTool"},{"attributes":{"toolbar":{"id":"43416"},"toolbar_location":"above"},"id":"43417","type":"ToolbarBox"},{"attributes":{"toolbars":[{"id":"43282"},{"id":"43316"}],"tools":[{"id":"43272"},{"id":"43273"},{"id":"43274"},{"id":"43275"},{"id":"43276"},{"id":"43277"},{"id":"43278"},{"id":"43279"},{"id":"43306"},{"id":"43307"},{"id":"43308"},{"id":"43309"},{"id":"43310"},{"id":"43311"},{"id":"43312"},{"id":"43313"}]},"id":"43416","type":"ProxyToolbar"},{"attributes":{},"id":"43278","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"43280","type":"BoxAnnotation"},{"attributes":{},"id":"43396","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"43358","type":"Span"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"43330","type":"Span"},{"attributes":{},"id":"43389","type":"Selection"},{"attributes":{"axis":{"id":"43264"},"ticker":null},"id":"43267","type":"Grid"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43326","type":"VBar"},{"attributes":{},"id":"43395","type":"Selection"},{"attributes":{"children":[{"id":"43417"},{"id":"43415"}]},"id":"43418","type":"Column"},{"attributes":{},"id":"43411","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"43281","type":"PolyAnnotation"},{"attributes":{},"id":"43265","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43327","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43373","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43412"},"selection_policy":{"id":"43413"}},"id":"43371","type":"ColumnDataSource"},{"attributes":{"source":{"id":"43371"}},"id":"43375","type":"CDSView"},{"attributes":{},"id":"43410","type":"Selection"},{"attributes":{"below":[{"id":"43298"}],"center":[{"id":"43301"},{"id":"43305"},{"id":"43358"},{"id":"43364"},{"id":"43370"},{"id":"43376"}],"height":331,"left":[{"id":"43302"}],"output_backend":"webgl","renderers":[{"id":"43356"},{"id":"43362"},{"id":"43368"},{"id":"43374"}],"title":{"id":"43379"},"toolbar":{"id":"43316"},"toolbar_location":null,"width":496,"x_range":{"id":"43256"},"x_scale":{"id":"43294"},"y_range":{"id":"43258"},"y_scale":{"id":"43296"}},"id":"43291","subtype":"Figure","type":"Plot"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"43376","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43389"},"selection_policy":{"id":"43390"}},"id":"43325","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"43371"},"glyph":{"id":"43372"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43373"},"view":{"id":"43375"}},"id":"43374","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43367","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43410"},"selection_policy":{"id":"43411"}},"id":"43365","type":"ColumnDataSource"},{"attributes":{"source":{"id":"43365"}},"id":"43369","type":"CDSView"},{"attributes":{},"id":"43400","type":"AllLabels"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43366","type":"VBar"},{"attributes":{},"id":"43296","type":"LinearScale"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"43370","type":"Span"},{"attributes":{},"id":"43408","type":"Selection"},{"attributes":{"data_source":{"id":"43365"},"glyph":{"id":"43366"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43367"},"view":{"id":"43369"}},"id":"43368","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43355","type":"VBar"},{"attributes":{"data_source":{"id":"43359"},"glyph":{"id":"43360"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43361"},"view":{"id":"43363"}},"id":"43362","type":"GlyphRenderer"},{"attributes":{},"id":"43399","type":"BasicTickFormatter"},{"attributes":{},"id":"43409","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"43364","type":"Span"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"43348","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43338","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43408"},"selection_policy":{"id":"43409"}},"id":"43359","type":"ColumnDataSource"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43406"},"selection_policy":{"id":"43407"}},"id":"43353","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43360","type":"VBar"},{"attributes":{"source":{"id":"43359"}},"id":"43363","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43393"},"selection_policy":{"id":"43394"}},"id":"43337","type":"ColumnDataSource"},{"attributes":{"source":{"id":"43353"}},"id":"43357","type":"CDSView"},{"attributes":{},"id":"43407","type":"UnionRenderers"},{"attributes":{},"id":"43260","type":"LinearScale"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43372","type":"VBar"},{"attributes":{},"id":"43412","type":"Selection"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43344","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43391"},"selection_policy":{"id":"43392"}},"id":"43331","type":"ColumnDataSource"},{"attributes":{"ticks":[0,1,2,3]},"id":"43377","type":"FixedTicker"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43361","type":"VBar"}],"root_ids":["43418"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"6f73fec4-4306-4d6c-9825-7ffb7baf591b","root_ids":["43418"],"roots":{"43418":"847644a5-614c-46c6-be45-020c98ad1e8e"}}];
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