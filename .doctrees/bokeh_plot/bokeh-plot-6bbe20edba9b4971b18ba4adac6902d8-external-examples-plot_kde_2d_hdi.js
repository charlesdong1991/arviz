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
    
      
      
    
      var element = document.getElementById("bcc62bea-8ee9-4fed-ba20-309bce0531c6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bcc62bea-8ee9-4fed-ba20-309bce0531c6' but no matching script tag was found.")
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
                    
                  var docs_json = '{"7d6cccda-4546-405b-b4fb-e8fc51242b1f":{"defs":[],"roots":{"references":[{"attributes":{},"id":"21214","type":"PanTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21222","type":"PolyAnnotation"},{"attributes":{},"id":"21259","type":"Selection"},{"attributes":{},"id":"21253","type":"AllLabels"},{"attributes":{"children":[{"id":"21268"},{"id":"21266"}]},"id":"21269","type":"Column"},{"attributes":{"axis":{"id":"21209"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"21212","type":"Grid"},{"attributes":{},"id":"21262","type":"UnionRenderers"},{"attributes":{"axis":{"id":"21205"},"grid_line_color":null,"ticker":null},"id":"21208","type":"Grid"},{"attributes":{"fill_color":"#1764ab","line_alpha":0.25,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"21243","type":"Patch"},{"attributes":{},"id":"21218","type":"UndoTool"},{"attributes":{},"id":"21256","type":"AllLabels"},{"attributes":{"data_source":{"id":"21237"},"glyph":{"id":"21238"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21239"},"view":{"id":"21241"}},"id":"21240","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21221","type":"BoxAnnotation"},{"attributes":{},"id":"21250","type":"Title"},{"attributes":{},"id":"21219","type":"SaveTool"},{"attributes":{},"id":"21260","type":"UnionRenderers"},{"attributes":{},"id":"21255","type":"BasicTickFormatter"},{"attributes":{"toolbars":[{"id":"21223"}],"tools":[{"id":"21213"},{"id":"21214"},{"id":"21215"},{"id":"21216"},{"id":"21217"},{"id":"21218"},{"id":"21219"},{"id":"21220"}]},"id":"21267","type":"ProxyToolbar"},{"attributes":{"children":[[{"id":"21196"},0,0]]},"id":"21266","type":"GridBox"},{"attributes":{"source":{"id":"21232"}},"id":"21236","type":"CDSView"},{"attributes":{},"id":"21263","type":"Selection"},{"attributes":{"formatter":{"id":"21252"},"major_label_policy":{"id":"21253"},"ticker":{"id":"21210"}},"id":"21209","type":"LinearAxis"},{"attributes":{"end":6.669346624474049,"start":-3.0276600999226035},"id":"21247","type":"Range1d"},{"attributes":{"overlay":{"id":"21221"}},"id":"21215","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"21242"},"glyph":{"id":"21243"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21244"},"view":{"id":"21246"}},"id":"21245","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[544]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[544]}},"selected":{"id":"21259"},"selection_policy":{"id":"21260"}},"id":"21232","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"21232"},"glyph":{"id":"21233"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21234"},"view":{"id":"21236"}},"id":"21235","type":"GlyphRenderer"},{"attributes":{},"id":"21264","type":"UnionRenderers"},{"attributes":{},"id":"21206","type":"BasicTicker"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[324]},"y":{"__ndarray__":"ODR1oXla7z9aQgGUYbjwP5jqR1eGw/E/1pKOGqvO8j8UO9Xdz9nzP1TjG6H05PQ/kotiZBnw9T/QM6knPvv2Pw7c7+piBvg/cxaHYD0r+D9MhDauhxH5P4osfXGsHPo/yNTDNNEn+z8IfQr49TL8P90xuuQCafw/RiVRuxo+/T+EzZd+P0n+P8B13kFkVP8/hntHEjpo/z8Aj5KCxC8AQCDjNeRWtQBADPiQfuwTAUA+N9lF6ToBQF6LfKd7wAFAP3Jzw8gbAkB83x8JDkYCQJwzw2qgywJAfJsIVGUQA0C6h2bMMlEDQNrbCS7F1gNAo7jIHk3lA0D4L62PV1wEQAhhGpxLnARAGIRQ8enhBEDQx8rWrE8FQDjY81J8ZwVAViyXtA7tBUDUc3/iKQYGQHaAOhahcgZAM+jw+5uvBkCU1N13M/gGQCAkC88HRAdAtCiB2cV9B0CEorvebswHQNJ8JDtYAwhAyXy9KSxXCEDy0Mec6ogIQMl7vjGg4QhAEiVr/nwOCUCS+qn1CmIJQDB5DmAPlAlAMFVasbLXCUBQzbHBoRkKQOUB2+TGQgpAbiFVIzSfCkDMDOdl0qoKQMbs/VMVGgtAjnX4hMYkC0CZ8Tt7JIgLQKzJm+ZYqgtAE8L3zILnC0DMHT9I6y8MQALHw8jWOAxANtNSXNGCDEDtceKpfbUMQGklAiR7wQxADmZKswP6DEDgD+J+6S0NQArGhQsQOw1AsiYG6d5mDUCF4+GWgJwNQCoaKW2iwA1AtQPA57jHDUCQkyz8aO8NQLSoy+gAGA5AlRtpr/w+DkBIbszONEYOQMCGj2kdYQ5Ar8W2dNZ4DkB8wWb5a4sOQDjY7yrQlA5AMN88tACNDkD4OKxtQIYOQF0LMHXmjw5A/cE+tzyZDkCgbivKu5EOQLgoarq4gw5AUiYVW11sDkBIbszONEYOQEyWqspoMA5Arz+3NwneDUAqGiltosANQKoKd23vfg1ACsaFCxA7DUC2EgKx8AsNQOxx4ql9tQxAPK/kQIh5DEDMHT9I6y8MQDgsB1HrzAtArcmb5liqC0DCQA0+WFELQI51+ITGJAtAbiFVIzSfCkCpgmNGoTkKQFDNscGhGQpAMHkOYA+UCUASJWv+fA4JQPLQx5zqiAhAI+XcFP8kCEDRfCQ7WAMIQLQogdnFfQdAlNTddzP4BkB2gDoWoXIGQFYsl7QO7QVAONjzUnxnBUAYhFDx6eEEQPgvrY9XXARA0SCq/GlLBEDa2wkuxdYDQLqHZswyUQNAnDPDaqDLAkCGKjh6u1sCQHzfHwkORgJAXot8p3vAAUA+N9lF6ToBQKDKNIa14wBAIOM15Fa1AEAAj5KCxC8AQMB13kFkVP8/mDnnx6tK/z+EzZd+P0n+P0YlUbsaPv0/33LuSoAv/T8IfQr49TL8P8jUwzTRJ/s/iix9cawc+j+uihEUQ5b5P0yENq6HEfk/+uisOcsr+D8O3O/qYgb4P9AzqSc++/Y/dDIlvHvE9j+Si2JkGfD1PyRRbfVRTvU/VOMbofTk9D+0YxuQT/HzPxQ71d3P2fM/0sKdxfHQ8j/Wko4aq87yP5jqR1eGw/E/3dDg9DHD8T9aQgGUYbjwPxV+1trKp/A/OTR1oXla7z90ij9ZMxfvP7zj5xowRO0/Yb89TPEb7T+JM61k11zrP0CTWpTmLes/SEadgnSz6T/EQs0NnRfpP3QwBT/cDug/SPI/h1MB5z/+ZZX8jXbmP5sUFHXCEuU/yKGyAArr5D9C1ulBHeXjP0xRJXrA1OI/Di9qlmfM4j+QRIZS6pLhP9AAmPN2vuA/j1b2dqBW4D+6M+HiryPeP6hgFdpaUN0/FKA0LQS52z+bylTQSLnZP7C/+szHI9k/OTvU9OX/1z9YhBa4SlzWPzWZfEkiBNU/uB7gvzT31D8+8mr7n9vTP5QRIM4Z6dI/dNbK69QJ0j+nHjoqrDDRP8B9xbKhytA/UWLDtQ0/0D8AJ7IAH3nOP+q6c0qD98w/iigeTX+0zD+6V6xkhgDOP/L0U858m88/BE9LQ8ds0D/AfcWyocrQPw8r6OXILdE/tVv3Hps/0j8GcRc+KrrTP7ge4L8099Q/0q5gVWai1T9vSDswUjDYP7C/+szHI9k/9Hj1S9oo2z+oYBXaWlDdP2SxY0Yx7t0/0ACY83a+4D/wAHlJTSzhP0xRJXrA1OI/3dK/FQ185D/IobIACuvkP0jyP4dTAec/UqUgOCa35z/EQs0NnRfpP0CTWpTmLes/vOPnGjBE7T9knxwFp/XtPzg0daF5Wu8/0sCg2odm9j+Si2JkGfD1P30PH0ql8fQ/VOMbofTk9D8UO9Xdz9nzP1EAW3mUuPM/xcEfwuEQ8z/Wko4aq87yP0798usAd/I/XoHz//oZ8j+C0ZyNmv3xP2qodXLdAPI/Zr+xcYoe8j/OrOsu0lPyP/lTPAxdl/I/1pKOGqvO8j/6edAnd+byPzpTlEmLRfM/zJB3MSvC8z8UO9Xdz9nzP5OacXsUVPQ/VOMbofTk9D9nVvxij/f0P2ZcwM49pfU/kotiZBnw9T99UVWW4mP2P9AzqSc++/Y/q1R7U6Iy9z8O3O/qYgb4P2m/TyL+HPg/TIQ2rocR+T/E0q19DTT5P4osfXGsHPo/mMhVGCuM+j/I1MM00Sf7P2AW8cs0Afw/CH0K+PUy/D9GJVG7Gj79PwokGxSCc/0/hM2Xfj9J/j/rveLp7Cv/P8B13kFkVP8/AI+SgsQvAEAg4zXkVrUAQIH1rumY/QBAPjfZRek6AUBei3yne8ABQHzfHwkORgJAnDPDaqDLAkC6h2bMMlEDQNrbCS7F1gNA+C+tj1dcBEAYhFDx6eEEQDjY81J8ZwVAjtswXeynBUBWLJe0Du0FQHaAOhahcgZAZOJcxNV2BkCw0TTv8NEGQJTU3Xcz+AZANL/Bo34oB0CuSZNCBWgHQLQogdnFfQdAKiA8j7yHB0DL2BlSG4oHQLUogdnFfQdAUi0bgTF5B0B3beM+5GAHQC9MmFnNRQdAyX3aPoUhB0CU1N13M/gGQM9MCboF8QZAa0bKAYC4BkDfgXxMI3cGQHaAOhahcgZAnpqQbeAqBkBWLJe0Du0FQHA5LOpb0AVAf3twsF5vBUA42PNSfGcFQMDO/k/YCgVAGIRQ8enhBEAUJ3ePb5kEQPgvrY9XXARA9g8yGW0RBEDa2wkuxdYDQKtP7KTPdgNAuodmzDJRA0CcM8NqoMsCQHzfHwkORgJAdqGWuzcIAkBei3yne8ABQD432UXpOgFAInLQP543AUAg4zXkVrUAQLTXK57WWABAAI+SgsQvAEDAdd5BZFT/P4TNl34/Sf4/RiVRuxo+/T9jiZEjKPT8Pwh9Cvj1Mvw/yNTDNNEn+z+KLH1xrBz6P0yENq6HEfk/Dtzv6mIG+D/QM6knPvv2P9LAoNqHZvY/","dtype":"float64","order":"little","shape":[324]}},"selected":{"id":"21261"},"selection_policy":{"id":"21262"}},"id":"21237","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.1,"fill_color":"#4a98c9","line_alpha":0.1,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"21239","type":"Patch"},{"attributes":{"toolbar":{"id":"21267"},"toolbar_location":"above"},"id":"21268","type":"ToolbarBox"},{"attributes":{"callback":null},"id":"21220","type":"HoverTool"},{"attributes":{"formatter":{"id":"21255"},"major_label_policy":{"id":"21256"},"ticker":{"id":"21206"}},"id":"21205","type":"LinearAxis"},{"attributes":{"active_multi":null,"tools":[{"id":"21213"},{"id":"21214"},{"id":"21215"},{"id":"21216"},{"id":"21217"},{"id":"21218"},{"id":"21219"},{"id":"21220"}]},"id":"21223","type":"Toolbar"},{"attributes":{"end":6.1322222483652995,"start":-2.150794791129645},"id":"21248","type":"Range1d"},{"attributes":{},"id":"21203","type":"LinearScale"},{"attributes":{},"id":"21201","type":"LinearScale"},{"attributes":{"below":[{"id":"21205"}],"center":[{"id":"21208"},{"id":"21212"}],"height":500,"left":[{"id":"21209"}],"output_backend":"webgl","renderers":[{"id":"21235"},{"id":"21240"},{"id":"21245"}],"title":{"id":"21250"},"toolbar":{"id":"21223"},"toolbar_location":null,"width":500,"x_range":{"id":"21247"},"x_scale":{"id":"21201"},"y_range":{"id":"21248"},"y_scale":{"id":"21203"}},"id":"21196","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"21237"}},"id":"21241","type":"CDSView"},{"attributes":{"fill_color":"#94c4df","line_alpha":0.25,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"21233","type":"Patch"},{"attributes":{},"id":"21213","type":"ResetTool"},{"attributes":{},"id":"21261","type":"Selection"},{"attributes":{},"id":"21216","type":"WheelZoomTool"},{"attributes":{"source":{"id":"21242"}},"id":"21246","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"9/H48A0J8D/8bEuFDsjvPy6J0Qp5yu8/6iL4nrPk7z8BI6+N1AbwP7mfBrWJLPA/iE6SHVNO8D8GsXkGBVvwP0W1AHZyi/A/PC22FaDY8D/oSfdK61LxP1SxXX0Sh/E/9PVCwa7/8T8cFCnd0b/yPwYfGOnwxPI/LByu83eP8z/odvQ8kfjzP6CiM/+eWfQ/tNm/nFAx9T/Wl2bdTyD2P4A8i/wPavY/ACLYajQn9z9Mn1Zcz6L3P3VEO1C2SPg/GAIivI7b+D9ai4st5J35P99k7RtOFPo/pRysY74z+z+tx7h7DU37P3gqhNvMhfw/NIXM9fvo/D9EjU87jL79Pz9z2nUr5f4/EPAam0v3/j9uKXN9BRgAQNTaWC1ltABAIVpavz/LAEA4jD7dxFABQJ49JI0k7QFABO8JPYSJAkBqoO/s4yUDQJ30QychUANA0FHVnEPCA0A2A7tMo14EQKa2rrIUlQRAmrSg/AL7BEAAZoasYpcFQJ5RTliC8gVAZhdsXMIzBkDMyFEMItAGQFISuVsQ1gZAdPyxDehPB0Ayeje8gWwHQHXMLHj5ggdASvXb7GG/B0BWKDtowusHQMB6An5g+QdAypjLd0oACECyG9rdPP4HQGqL9XIU5wdAQ8SNiAa7B0D5T26xqIQHQDJ6N7yBbAdAq4peg+5RB0AOzkCJZR0HQPmSINIw3QZAzMhRDCLQBkDurlFb2IkGQGYXbFzCMwZA5XN30xsfBkAijSWfiqwFQABmhqxilwVALhGSvRo7BUCatKD8AvsEQCBUQ3XSygRANgO7TKNeBEB3zEVrKk0EQNBR1ZxDwgNAojs32e+zA0BqoO/s4yUDQBFKhdG8/QJABO8JPYSJAkDG5wEALCwCQJ49JI0k7QFAOIw+3cRQAUCYtGrEdT4BQNTaWC1ltABAawJNPX8wAEBuKXN9BRgAQBDwGptL9/4/RI1PO4y+/T/SKERyOV/9P3gqhNvMhfw/rMe4ew1N+z/gZO0bThT6PxgCIryO2/g/TJ9WXM+i9z+APIv8D2r2P7TZv5xQMfU/NEV3SdyD9D/odvQ8kfjzPxwUKd3Rv/I/DeCfehOT8j9H24TmgJLxP1SxXX0Sh/E/9ZhSQ5Sd8D+ITpIdU07wP/fx+PANCfA/","dtype":"float64","order":"little","shape":[108]},"y":{"__ndarray__":"0DOpJz779j8O3O/qYgb4P0yENq6HEfk/iix9cawc+j/I1MM00Sf7Pwh9Cvj1Mvw/Y4mRIyj0/D9GJVG7Gj79P4TNl34/Sf4/wHXeQWRU/z8Aj5KCxC8AQLTXK57WWABAIOM15Fa1AEAictA/njcBQD432UXpOgFAXot8p3vAAUB2oZa7NwgCQHzfHwkORgJAnDPDaqDLAkC6h2bMMlEDQKtP7KTPdgNA2tsJLsXWA0D2DzIZbREEQPgvrY9XXARAFCd3j2+ZBEAYhFDx6eEEQMDO/k/YCgVAONjzUnxnBUCAe3CwXm8FQHA5LOpb0AVAViyXtA7tBUCempBt4CoGQHaAOhahcgZA3oF8TCN3BkBrRsoBgLgGQM9MCboF8QZAlNTddzP4BkDJfdo+hSEHQC9MmFnNRQdAeG3jPuRgB0BSLRuBMXkHQLQogdnFfQdAy9gZUhuKB0AqIDyPvIcHQLQogdnFfQdArkmTQgVoB0A0v8GjfigHQJTU3Xcz+AZAsNE07/DRBkBj4lzE1XYGQHaAOhahcgZAViyXtA7tBUCO2zBd7KcFQDjY81J8ZwVAGIRQ8enhBED4L62PV1wEQNrbCS7F1gNAuodmzDJRA0CcM8NqoMsCQHzfHwkORgJAXot8p3vAAUA+N9lF6ToBQIH1rumY/QBAIOM15Fa1AEAAj5KCxC8AQMB13kFkVP8/673i6ewr/z+EzZd+P0n+PwokGxSCc/0/RiVRuxo+/T8HfQr49TL8P2AW8cs0Afw/yNTDNNEn+z+YyFUYK4z6P4osfXGsHPo/xNKtfQ00+T9MhDauhxH5P2m/TyL+HPg/Dtzv6mIG+D+rVHtTojL3P9AzqSc++/Y/fFFVluJj9j+Si2JkGfD1P2VcwM49pfU/Z1b8Yo/39D9U4xuh9OT0P5SacXsUVPQ/FDvV3c/Z8z/MkHcxK8LzPzpTlEmLRfM/+nnQJ3fm8j/Wko4aq87yP/lTPAxdl/I/zqzrLtJT8j9mv7Fxih7yP2qodXLdAPI/gtGcjZr98T9egfP/+hnyP0798usAd/I/1pKOGqvO8j/FwR/C4RDzP1EAW3mUuPM/FDvV3c/Z8z9U4xuh9OT0P30PH0ql8fQ/kotiZBnw9T/SwKDah2b2P9AzqSc++/Y/","dtype":"float64","order":"little","shape":[108]}},"selected":{"id":"21263"},"selection_policy":{"id":"21264"}},"id":"21242","type":"ColumnDataSource"},{"attributes":{"fill_color":"#4a98c9","line_alpha":0.25,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"21238","type":"Patch"},{"attributes":{},"id":"21210","type":"BasicTicker"},{"attributes":{"overlay":{"id":"21222"}},"id":"21217","type":"LassoSelectTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1764ab","line_alpha":0.1,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"21244","type":"Patch"},{"attributes":{"fill_alpha":0.1,"fill_color":"#94c4df","line_alpha":0.1,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"21234","type":"Patch"},{"attributes":{},"id":"21252","type":"BasicTickFormatter"}],"root_ids":["21269"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"7d6cccda-4546-405b-b4fb-e8fc51242b1f","root_ids":["21269"],"roots":{"21269":"bcc62bea-8ee9-4fed-ba20-309bce0531c6"}}];
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