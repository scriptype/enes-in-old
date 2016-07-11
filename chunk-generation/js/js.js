var Generate = (function(_){

  _("#container").append("<div id='load'>Generating Chunk</div>");

  var
    
    canvas        = document.getElementById("chunk"),
    chunk         = canvas.getContext('2d'),
    chunkWidth    = canvas.width,
    chunkHeight   = canvas.height,
    blockVolume   = 25,
    horizontal    = chunkWidth / blockVolume,
    vertical      = chunkHeight / blockVolume,
    matrixVolume  = horizontal * vertical,
    path          = "img/",
    x = y         = blockVolume*(-1),
    imgLoaded     = 0,
    blockSource   = {},
    
    blocks        = [
      "surface",
      "dirt",
      "stone",
      "coal",
      "iron",
      "gold",
      "diamond",
      "lava",
      "bedrock"
    ],
    
    generateLayer = function(options){
    
      var
        blockDensity = {},
        layer = [];
        
      for (var i=0; i < blocks.length; i++) {
        blockDensity[blocks[i]] = 0
      }
      
      for (var i in blockDensity) {
      
        blockDensity[i] = options[i] || 0
        
        for (var j=0; j<blockDensity[i]; j++) {
          layer.push(i)
        }
      
      }
      
      return layer;
      
    },
  
    layers = {
      surface: {
        blocks: generateLayer({
          surface   : 950,
          stone     : 40,
          coal      : 10,
        }),
        depth: 25
      },
      beneathSurface: {
        blocks: generateLayer({
          dirt      : 850,
          stone     : 125,
          coal      : 25,
        }),
        depth: 100
      },
      topMiddle: {
        blocks: generateLayer({
          dirt      : 500,
          stone     : 400,
          coal      : 90,
          iron      : 10,
        }),
        depth: 75
      },
      middle: {
        blocks: generateLayer({
          dirt      : 250,
          stone     : 600,
          coal      : 100,
          iron      : 35,
          lava      : 15
        }),
        depth: 100
      },
      deepMiddle: {
        blocks: generateLayer({
          dirt      : 70,
          stone     : 690,
          coal      : 120,
          iron      : 70,
          lava      : 50
        }),
        depth: 75
      },
      deep: {
        blocks: generateLayer({
          dirt      : 25,
          stone     : 475,
          coal      : 150,
          iron      : 100,
          gold      : 50,
          lava      : 200
        }),
        depth: 75
      },
      hell: {
        blocks: generateLayer({
          stone     : 146,
          coal      : 225,
          iron      : 175,
          gold      : 45,
          diamond   : 9,
          lava      : 400
        }),
        depth: 100
      },
      startBedrock: {
        blocks: generateLayer({
          stone     : 48,
          diamond   : 2,
          lava      : 450,
          bedrock   : 500
        }),
        depth: 25
      },
      bedrock: {
        blocks: generateLayer({
          bedrock      : 1000
        }),
        depth: 25
      },
    },
    
    render = function(){
    
      if ( blocks.length === ++imgLoaded ) {
      
        _("#load").remove();
        
        for (var i in layers) {
      
          for (var j=0; j<matrixVolume / (chunkHeight / layers[i]["depth"]) ; j++) {
          
            var
              d         = Math.random() * (layers[i]["blocks"].length - 1),
              d         = Math.round(d),
              block     = layers[i]["blocks"][d];
              
            if (j % horizontal === 0) {
              y += blockVolume
              x =  blockVolume * (-1)
            }
            x+=blockVolume;
            
            chunk.drawImage(blockSource[block], x, y)
          
          }
      
        }
      
      }

    },
    
    setSources  = function() {
      
      for (var i=0; i < blocks.length; i++) {
        blockSource[blocks[i]] = new Image();
        blockSource[blocks[i]].src = path + blocks[i] + ".png";
        blockSource[blocks[i]].onload = render
      }
      
    };
    
    // INIT
    
    setSources();
  
})($)