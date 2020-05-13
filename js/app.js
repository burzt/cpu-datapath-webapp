var $ = go.GraphObject.make;
var registertemplate =
  $(go.Node, "Spot",
    {
      movable: false,
      copyable: false,
      deletable: false,
    },
    new go.Binding("location", "loc"),  // allows changing of node's position
    $(go.Panel, "Spot",
      // register
      $(go.Shape, "RoundedRectangle", {
        fill: "lightblue",
        desiredSize: new go.Size(100, 150),
        //initialDocumentSpot: go.Spot.TopCenter
      }),
      $(go.TextBlock, { margin: 0, position: new go.Point(50, 75) },
        new go.Binding("text", "key")    // for model
      )
    ),
    // readreg1 left port
    $(go.Shape, "Ellipse",
      {
        fill: "pink",
        // puts readreg1 top left
        //                  (x,y,x-offset,y-offset)
        alignment: new go.Spot(0, 0, 0, 30),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Left,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: false, toLinkable: true
      }, new go.Binding("portId", "readreg1")
    ),
    $(go.TextBlock, "RR1", { alignment: new go.Spot(0, 0, 5, 30), alignmentFocus: go.Spot.Left }),
    // readreg2 left port
    $(go.Shape, "Ellipse",
      {
        fill: "pink",
        // puts readreg2 top left
        alignment: new go.Spot(0, 0, 0, 60),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Left,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: false, toLinkable: true
      }, new go.Binding("portId", "readreg2")
    ),
    $(go.TextBlock, "RR2", { alignment: new go.Spot(0, 0, 5, 60), alignmentFocus: go.Spot.Left }),
    // write register left port
    $(go.Shape, "Ellipse",
      {
        fill: "pink",
        // puts write register top left
        alignment: new go.Spot(0, 0, 0, 90),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Left,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: false, toLinkable: true
      }, new go.Binding("portId", "writereg")
    ),
    $(go.TextBlock, "WR", { alignment: new go.Spot(0, 0, 5, 90), alignmentFocus: go.Spot.Left }),
    // write data left port
    $(go.Shape, "Ellipse",
      {
        fill: "pink",
        // puts write data top left
        alignment: new go.Spot(0, 0, 0, 120),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Left,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: false, toLinkable: true
      }, new go.Binding("portId", "writedata")
    ),
    $(go.TextBlock, "WD", { alignment: new go.Spot(0, 0, 5, 120), alignmentFocus: go.Spot.Left }),
    // read data1 right port
    $(go.Shape, "Ellipse",
      {
        fill: "green",
        alignment: new go.Spot(1, 0, 0, 45),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Right,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: true, toLinkable: false
      }, new go.Binding("portId", "readdata1")
    ),
    $(go.TextBlock, "RD1", { alignment: new go.Spot(1, 0, -5, 45), alignmentFocus: go.Spot.Right }),
    // read data2 right port
    $(go.Shape, "Ellipse",
      {
        fill: "green",
        alignment: new go.Spot(1, 0, 0, 105),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Right,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: true, toLinkable: false
      }, new go.Binding("portId", "readdata2")
    ),
    $(go.TextBlock, "RD2", { alignment: new go.Spot(1, 0, -5, 105), alignmentFocus: go.Spot.Right }),
  );

  var indexregistertemplate =
  $(go.Node, "Spot",
    {
      movable: false,
      copyable: false,
      deletable: false,
    },
    new go.Binding("location", "loc"),  // allows changing of node's position
    $(go.Panel, "Spot",
      // register
      $(go.Shape, "RoundedRectangle", {
        fill: "lightblue",
        desiredSize: new go.Size(100, 180),
        //initialDocumentSpot: go.Spot.TopCenter
      }),
      $(go.TextBlock, { margin: 0, position: new go.Point(50, 90) },
        new go.Binding("text", "key")    // for model
      )
    ),
    // readreg1 left port
    $(go.Shape, "Ellipse",
      {
        fill: "pink",
        // puts readreg1 top left
        //                  (x,y,x-offset,y-offset)
        alignment: new go.Spot(0, 0, 0, 30),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Left,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: false, toLinkable: true
      }, new go.Binding("portId", "readreg1")
    ),
    $(go.TextBlock, "RR1", { alignment: new go.Spot(0, 0, 5, 30), alignmentFocus: go.Spot.Left }),
    // readreg2 left port
    $(go.Shape, "Ellipse",
      {
        fill: "pink",
        // puts readreg2 top left
        alignment: new go.Spot(0, 0, 0, 60),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Left,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: false, toLinkable: true
      }, new go.Binding("portId", "readreg2")
    ),
    $(go.TextBlock, "RR2", { alignment: new go.Spot(0, 0, 5, 60), alignmentFocus: go.Spot.Left }),
    $(go.Shape, "Ellipse",
      {
        fill: "pink",
        // puts readreg2 top left
        alignment: new go.Spot(0, 0, 0, 90),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Left,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: false, toLinkable: true
      }, new go.Binding("portId", "readreg2")
    ),
    $(go.TextBlock, "RR3", { alignment: new go.Spot(0, 0, 5, 90), alignmentFocus: go.Spot.Left }),
    // write register left port
    $(go.Shape, "Ellipse",
      {
        fill: "pink",
        // puts write register top left
        alignment: new go.Spot(0, 0, 0, 120),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Left,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: false, toLinkable: true
      }, new go.Binding("portId", "readreg3")
    ),
    $(go.TextBlock, "WR", { alignment: new go.Spot(0, 0, 5, 120), alignmentFocus: go.Spot.Left }),
    // write data left port
    $(go.Shape, "Ellipse",
      {
        fill: "pink",
        // puts write data top left
        alignment: new go.Spot(0, 0, 0, 150),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Left,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: false, toLinkable: true
      }, new go.Binding("portId", "writedata")
    ),
    $(go.TextBlock, "WD", { alignment: new go.Spot(0, 0, 5, 150), alignmentFocus: go.Spot.Left }),
    // read data1 right port
    $(go.Shape, "Ellipse",
      {
        fill: "green",
        alignment: new go.Spot(1, 0, 0, 45),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Right,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: true, toLinkable: false
      }, new go.Binding("portId", "readdata1")
    ),
    $(go.TextBlock, "RD1", { alignment: new go.Spot(1, 0, -5, 45), alignmentFocus: go.Spot.Right }),
    // read data2 right port
    $(go.Shape, "Ellipse",
      {
        fill: "green",
        alignment: new go.Spot(1, 0, 0, 75),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Right,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: true, toLinkable: false
      }, new go.Binding("portId", "readdata2")
    ),
    $(go.TextBlock, "RD2", { alignment: new go.Spot(1, 0, -5, 75), alignmentFocus: go.Spot.Right }),
    $(go.Shape, "Ellipse",
      {
        fill: "green",
        alignment: new go.Spot(1, 0, 0, 105),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Right,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: true, toLinkable: false
      }, new go.Binding("portId", "readdata3")
    ),
    $(go.TextBlock, "RD3", { alignment: new go.Spot(1, 0, -5, 105), alignmentFocus: go.Spot.Right }),
  );
var datamemorytemplate =
  $(go.Node, "Spot",
    {
      movable: false,
      copyable: false,
      deletable: false,
    },
    new go.Binding("location", "loc"),  // allows changing of node's position
    $(go.Panel, "Spot",
      // register
      $(go.Shape, "RoundedRectangle", {
        fill: "yellow",
        desiredSize: new go.Size(100, 150),
        //initialDocumentSpot: go.Spot.TopCenter
      }),
      $(go.TextBlock, { margin: 0, position: new go.Point(50, 75) },
        new go.Binding("text", "key")
      )
    ),
    // readreg1 left port
    $(go.Shape, "Ellipse",
      {
        fill: "pink",
        // puts readreg1 top left
        alignment: new go.Spot(0, 0, 0, 30),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Left,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: false, toLinkable: true
      }, new go.Binding("portId", "addr")
    ),
    $(go.TextBlock, "address", { alignment: new go.Spot(0, 0, 5, 30), alignmentFocus: go.Spot.Left }),
    // write data left port
    $(go.Shape, "Ellipse",
      {
        fill: "pink",
        // puts write data top left
        alignment: new go.Spot(0, 0, 0, 120),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Left,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: false, toLinkable: true
      }, new go.Binding("portId", "writedata")
    ),
    $(go.TextBlock, "Write Data", { alignment: new go.Spot(0, 0, 5, 120), alignmentFocus: go.Spot.Left }),
    // read data1 right port
    $(go.Shape, "Ellipse",
      {
        fill: "green",
        alignment: new go.Spot(1, 0, 0, 100),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Right,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: true, toLinkable: false
      }, new go.Binding("portId", "readdata")
    ),
    $(go.TextBlock, "Read Data", { alignment: new go.Spot(1, 0, -75, 100), alignmentFocus: go.Spot.Left }),
  );

var signextendtemplate =
  $(go.Node, "Spot",
    {
      movable: false,
      copyable: false,
      deletable: false,
    },
    new go.Binding("location", "loc"),  // allows changing of node's position
    $(go.Panel, "Spot",
      // register
      $(go.Shape, "Ellipse", {
        fill: "lightgreen",
        desiredSize: new go.Size(75, 100),
        //initialDocumentSpot: go.Spot.TopCenter
      }),
      $(go.TextBlock, { margin: 0, position: new go.Point(50, 75) },
        new go.Binding("text", "key")
      )
    ),
    // incoming sign extend
    $(go.Shape, "Ellipse",
      {
        fill: "pink",
        alignment: new go.Spot(0, 0, 0, 50),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Left,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: false, toLinkable: true
      }, new go.Binding("portId", "sein")
    ),
    // outgoing sign extend
    $(go.Shape, "Ellipse",
      {
        fill: "green",
        alignment: new go.Spot(1, 0, 0, 50),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Right,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: true, toLinkable: false
      }, new go.Binding("portId", "seout")
    ),
  );
  var programcountertemplate =
  $(go.Node, "Spot",
    {
      movable: false,
      copyable: false,
      deletable: false,
    },
    new go.Binding("location", "loc"),  // allows changing of node's position
    $(go.Panel, "Spot",
      // register
      $(go.Shape, "Rectangle", {
        fill: "#feb236",
        desiredSize: new go.Size(75, 100),
        //initialDocumentSpot: go.Spot.TopCenter
      }),
      $(go.TextBlock, { margin: 0, position: new go.Point(50, 75) },
        new go.Binding("text", "key")
      )
    ),
    // incoming pc
    $(go.Shape, "Ellipse",
      {
        fill: "pink",
        alignment: new go.Spot(0, 0, 0, 50),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Left,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: false, toLinkable: true
      }, new go.Binding("portId", "pcin")
    ),
    // outgoing pc
    $(go.Shape, "Ellipse",
      {
        fill: "green",
        alignment: new go.Spot(1, 0, 0, 50),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Right,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: true, toLinkable: false
      }, new go.Binding("portId", "pcout")
    ),
  );
var imtemplate =
  $(go.Node, "Spot",
    {
      movable: false,
      copyable: false,
      deletable: false,
    },
    new go.Binding("location", "loc"),  // allows changing of node's position
    $(go.Panel, "Spot",
      // register
      $(go.Shape, "RoundedRectangle", {
        fill: "grey",
        desiredSize: new go.Size(100, 150),
        //initialDocumentSpot: go.Spot.TopCenter
      }),
      $(go.TextBlock, { margin: 0, position: new go.Point(50, 75) },
        new go.Binding("text", "key")
      )
    ),
    // read data1 right port
    $(go.Shape, "Ellipse",
      {
        fill: "pink",
        alignment: new go.Spot(1, 0, 0, 45),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Right,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: true, toLinkable: false
      }, new go.Binding("portId", "imfetch")
    ));
var alutemplate =
  $(go.Node, "Spot",
    {
      movable: false,
      copyable: false,
      deletable: false,
    },
    new go.Binding("location", "loc"),  // allows changing of node's position
    $(go.Panel, "Spot",
      $(go.Shape, "TriangleRight", {
        fill: "salmon",
        desiredSize: new go.Size(80, 80),
      }),
      $(go.TextBlock,
        { margin: 0 },
        { alignmentFocus: go.Spot.Center },
        { position: new go.Point(27, 35) }, //only way i could find to center text
        new go.Binding("text", "key")
      )
    ),
    $(go.Shape, "Ellipse",
      {
        fill: "pink",
        // puts alu_op1 top left
        alignment: new go.Spot(0, 0, 0, 30),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Left,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: false, toLinkable: true, toMaxLinks: 1
      }, new go.Binding("portId", "alu1")
    ),
    $(go.Shape, "Ellipse",
      {
        fill: "pink",
        // puts alu_op2 bottom left
        alignment: new go.Spot(0, 0, 0, 60),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Left,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: false, toLinkable: true, toMaxLinks: 1
      }, new go.Binding("portId", "alu2")
    ),
    $(go.Shape, "Ellipse",
      {
        // result on right of triangle
        fill: "green",
        alignment: new go.Spot(1, 0, 0, 40),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Right,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: true, toLinkable: false, fromMaxLinks: 1
      }, new go.Binding("portId", "result")
    ),
  );

  var addtemplate =
  $(go.Node, "Spot",
    {
      movable: false,
      copyable: false,
      deletable: false,
    },
    new go.Binding("location", "loc"),  // allows changing of node's position
    $(go.Panel, "Spot",
      $(go.Shape, "TriangleRight", {
        fill: "salmon",
        desiredSize: new go.Size(60, 60),
      }),
      $(go.TextBlock,
        { margin: 0 },
        { alignmentFocus: go.Spot.Center },
        { position: new go.Point(27, 35) }, //only way i could find to center text
        new go.Binding("text", "key")
      )
    ),
    $(go.Shape, "Ellipse",
      {
        fill: "pink",
        // puts add1 left
        alignment: new go.Spot(0, 0, 0, 20),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Left,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: false, toLinkable: true, toMaxLinks: 1
      }, new go.Binding("portId", "add1")
    ),
    $(go.Shape, "Ellipse",
      {
        fill: "pink",
        // puts add2 left
        alignment: new go.Spot(0, 0, 0, 40),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Left,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: false, toLinkable: true, toMaxLinks: 1
      }, new go.Binding("portId", "add2")
    ),
    $(go.Shape, "Ellipse",
      {
        // result on right of triangle
        fill: "green",
        alignment: new go.Spot(1, 0, 0, 30),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Right,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: true, toLinkable: false, fromMaxLinks: 1
      }, new go.Binding("portId", "addres")
    ),
  );

  var shiftlefttemplate = 
  $(go.Node, "Spot",
    {
      movable: false,
      copyable: false,
      deletable: false,
    },
    new go.Binding("location", "loc"),  // allows changing of node's position
    $(go.Panel, "Spot",
      // register
      $(go.Shape, "Ellipse", {
        fill: "#f0b4f5",
        desiredSize: new go.Size(75, 100),
        //initialDocumentSpot: go.Spot.TopCenter
      }),
      $(go.TextBlock, { margin: 0, position: new go.Point(25, 35) },
        new go.Binding("text", "key")
      )
    ),
    // incoming shiftleft
    $(go.Shape, "Ellipse",
      {
        fill: "pink",
        alignment: new go.Spot(0, 0, 0, 50),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Left,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: false, toLinkable: true
      }, new go.Binding("portId", "shiftin")
    ),
    // outgoing shift left
    $(go.Shape, "Ellipse",
      {
        fill: "green",
        alignment: new go.Spot(1, 0, 0, 50),
        desiredSize: new go.Size(10, 10), //alignment: go.Spot.Right,
        fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
        fromLinkable: true, toLinkable: false
      }, new go.Binding("portId", "shiftout")
    ),
  );

/*
 * 
 * 
 * END OF SHAPESSSSSSSSSSSSS
 *  
 * 
 */


function loadInstruction() {
  // Allows clicking of page elements to refresh page and go to function.
  document.getElementById('load').onclick = function () {
    refreshDiagram();
    loadInstruction();
  };
  var $ = go.GraphObject.make;
  myDiagram = $(go.Diagram, "myDiagramDiv", {
    // allow double-click in background to create a new node
    //"clickCreatingTool.archetypeNodeData": { text: "Node", color: "white" },

    // allow Ctrl-G to call groupSelection()
    //"commandHandler.archetypeGroupData": { text: "Group", isGroup: true, color: "blue" },

    allowHorizontalScroll: false,
    allowVerticalScroll: false,
    allowZoom: false,

    // enable undo & redo
    "undoManager.isEnabled": true
  });

  var templmap = new go.Map(); // In TypeScript you could write: new go.Map<string, go.Node>();
  // for each of the node categories, specify which template to use
  templmap.add("register", registertemplate);
  templmap.add("im", imtemplate);
  templmap.add("signextend", signextendtemplate);
  templmap.add("datamemory", datamemorytemplate);
  templmap.add("alu", alutemplate);
  myDiagram.nodeTemplateMap = templmap;

  myDiagram.model = new go.GraphLinksModel(
    [
      { key: "Register", category: "register", loc: new go.Point(-400, 50), readreg1: 1, readreg2: -1, writereg: 0, writedata: 5, readdata1: 2, readdata2: -1 },
      { key: "IM", category: "im", loc: new go.Point(-600, 50), imfetch: 0 },
      { key: "SE", category: "signextend", loc: new go.Point(-310, 250), sein: 1, seout: 3 },
      { key: "DM", category: "datamemory", loc: new go.Point(0, 50), addr: 4, writedata: -1, readdata: 5 },
      { key: "ALU", category: "alu", loc: new go.Point(-200, 75), alu1: 2, alu2: 3, result: 4 },
    ],
  );
  myDiagram.linkTemplate =
    $(go.Link,
      { routing: go.Link.AvoidsNodes, corner: 3, },
      $(go.Shape, new go.Binding("portId", "fromNode", function (n) { return n.portId; })
        .ofObject()),
      $(go.Shape, { toArrow: "Standard" }, new go.Binding("portId", "fromNode", function (n) { return n.portId; })
        .ofObject()));

  function samePortId(fromnode, fromport, tonode, toport) {
    console.log()
    if (fromport.portId == -1 || toport.portId == -1) {
      return false;
    }
    if (fromport.portId == 0) {
      return (fromport.portId === toport.portId) || ((fromport.portId + 1) === toport.portId);
    }
    return (fromport.portId === toport.portId);
  }
  myDiagram.toolManager.linkingTool.linkValidation = samePortId;
  myDiagram.toolManager.relinkingTool.linkValidation = samePortId;

  // Adjust sensitivity of link snapping
  myDiagram.toolManager.linkingTool.portGravity = 5;

  myDiagram.model.linkFromPortIdProperty = "fromPort";
  myDiagram.model.linkToPortIdProperty = "toPort";
  initialDocumentSpot: go.Spot.TopCenter; // may work, idk
}

function addInstruction() {
  document.getElementById('add').onclick = function () {
    refreshDiagram();
    addInstruction();
  };
  var $ = go.GraphObject.make;
  myDiagram = $(go.Diagram, "myDiagramDiv", {
    // allow double-click in background to create a new node
    //"clickCreatingTool.archetypeNodeData": { text: "Node", color: "white" },

    // allow Ctrl-G to call groupSelection()
    //"commandHandler.archetypeGroupData": { text: "Group", isGroup: true, color: "blue" },

    allowHorizontalScroll: false,
    allowVerticalScroll: false,
    allowZoom: false,
    // enable undo & redo
    "undoManager.isEnabled": true
  });

  var templmap = new go.Map(); // In TypeScript you could write: new go.Map<string, go.Node>();
  // for each of the node categories, specify which template to use
  templmap.add("register", registertemplate);
  templmap.add("im", imtemplate);
  templmap.add("alu", alutemplate);
  myDiagram.nodeTemplateMap = templmap;

  myDiagram.model = new go.GraphLinksModel(
    [
      { key: "Register", category: "register", loc: new go.Point(-400, 50), readreg1: 0, readreg2: 1, writereg: 2, writedata: 3, readdata1: 4, readdata2: 5 },
      { key: "IM", category: "im", loc: new go.Point(-600, 50), imfetch: 0 },
      { key: "ALU", category: "alu", loc: new go.Point(-200, 75), alu1: 4, alu2: 5, result: 3 },
    ],
  );
  myDiagram.linkTemplate =
    $(go.Link,
      { routing: go.Link.AvoidsNodes, corner: 3 },
      $(go.Shape, new go.Binding("portId", "fromNode", function (n) { return n.portId; })
        .ofObject()),
      $(go.Shape, { toArrow: "Standard" }, new go.Binding("portId", "fromNode", function (n) { return n.portId; })
        .ofObject()));

  function samePortId(fromnode, fromport, tonode, toport) {
    console.log()
    if (fromport.portId == -1 || toport.portId == -1) {
      return false;
    }
    if (fromport.portId == 0) {
      return (fromport.portId === toport.portId) || ((fromport.portId + 1) === toport.portId) || ((fromport.portId + 2) === toport.portId);
    }
    return (fromport.portId === toport.portId);

  }
  myDiagram.toolManager.linkingTool.linkValidation = samePortId;
  myDiagram.toolManager.relinkingTool.linkValidation = samePortId;

  // Adjust sensitivity of link snapping
  myDiagram.toolManager.linkingTool.portGravity = 5;

  myDiagram.model.linkFromPortIdProperty = "fromPort";
  myDiagram.model.linkToPortIdProperty = "toPort";
}

function storeInstruction() {
  document.getElementById('store').onclick = function () {
    refreshDiagram();
    storeInstruction();
  };
  var $ = go.GraphObject.make;
  myDiagram = $(go.Diagram, "myDiagramDiv", {
    // allow double-click in background to create a new node
    //"clickCreatingTool.archetypeNodeData": { text: "Node", color: "white" },

    // allow Ctrl-G to call groupSelection()
    //"commandHandler.archetypeGroupData": { text: "Group", isGroup: true, color: "blue" },

    allowHorizontalScroll: false,
    allowVerticalScroll: false,
    allowZoom: false,
    // enable undo & redo
    "undoManager.isEnabled": true
  });

  var templmap = new go.Map(); // In TypeScript you could write: new go.Map<string, go.Node>();
  // for each of the node categories, specify which template to use
  templmap.add("register", registertemplate);
  templmap.add("im", imtemplate);
  templmap.add("signextend", signextendtemplate);
  templmap.add("datamemory", datamemorytemplate);
  templmap.add("alu", alutemplate);
  myDiagram.nodeTemplateMap = templmap;

  myDiagram.model = new go.GraphLinksModel(
    [
      { key: "Register", category: "register", loc: new go.Point(-400, 50), readreg1: 0, readreg2: 1, writereg: -1, writedata: -1, readdata1: 2, readdata2: 3 },
      { key: "IM", category: "im", loc: new go.Point(-600, 50), imfetch: 0 },
      { key: "SE", category: "signextend", loc: new go.Point(-310, 250), sein: 1, seout: 4 },
      { key: "DM", category: "datamemory", loc: new go.Point(-0, 50), addr: 5, writedata: 3, readdata: -1 },
      { key: "ALU", category: "alu", loc: new go.Point(-200, 75), alu1: 2, alu2: 4, result: 5 },
    ],
  );
  myDiagram.linkTemplate =
    $(go.Link,
      { routing: go.Link.AvoidsNodes, corner: 3 },
      $(go.Shape, new go.Binding("portId", "fromNode", function (n) { return n.portId; })
        .ofObject()),
      $(go.Shape, { toArrow: "Standard" }, new go.Binding("portId", "fromNode", function (n) { return n.portId; })
        .ofObject()));

  function samePortId(fromnode, fromport, tonode, toport) {
    console.log()
    if (fromport.portId == -1 || toport.portId == -1) {
      return false;
    }
    if (fromport.portId == 0) {
      return (fromport.portId === toport.portId) || ((fromport.portId + 1) === toport.portId);// || ((fromport.portId + 2) === toport.portId);
    }
    return (fromport.portId === toport.portId);
  }
  myDiagram.toolManager.linkingTool.linkValidation = samePortId;
  myDiagram.toolManager.relinkingTool.linkValidation = samePortId;

  // Adjust sensitivity of link snapping
  myDiagram.toolManager.linkingTool.portGravity = 5;

  myDiagram.model.linkFromPortIdProperty = "fromPort";
  myDiagram.model.linkToPortIdProperty = "toPort";
}
function indexedAddressingStoreInstruction() {
  document.getElementById('indexedstore').onclick = function () {
    refreshDiagram();
    indexedAddressingStoreInstruction();
  };
  var $ = go.GraphObject.make;
  myDiagram = $(go.Diagram, "myDiagramDiv", {
    // allow double-click in background to create a new node
    //"clickCreatingTool.archetypeNodeData": { text: "Node", color: "white" },

    // allow Ctrl-G to call groupSelection()
    //"commandHandler.archetypeGroupData": { text: "Group", isGroup: true, color: "blue" },

    allowHorizontalScroll: false,
    allowVerticalScroll: false,
    allowZoom: false,
    // enable undo & redo
    "undoManager.isEnabled": true
  });

  var templmap = new go.Map(); // In TypeScript you could write: new go.Map<string, go.Node>();
  // for each of the node categories, specify which template to use
  templmap.add("iregister", indexregistertemplate);
  templmap.add("im", imtemplate);
  templmap.add("signextend", signextendtemplate);
  templmap.add("datamemory", datamemorytemplate);
  templmap.add("alu", alutemplate);
  myDiagram.nodeTemplateMap = templmap;

  myDiagram.model = new go.GraphLinksModel(
    [
      { key: "Register", category: "iregister", loc: new go.Point(-400, 50), readreg1: 0, readreg2: 1, writereg: -1, readreg3: 2, writedata: -1, readdata1: 3, readdata2: 4, readdata3: 6 },
      { key: "IM", category: "im", loc: new go.Point(-600, 50), imfetch: 0 },
      { key: "SE", category: "signextend", loc: new go.Point(-310, 250), sein: -1, seout: -1 },
      { key: "DM", category: "datamemory", loc: new go.Point(-0, 50), addr: 5, writedata: 6, readdata: -1 },
      { key: "ALU", category: "alu", loc: new go.Point(-200, 75), alu1: 3, alu2: 4, result: 5 },
    ],
  );
  myDiagram.linkTemplate =
    $(go.Link,
      { routing: go.Link.AvoidsNodes, corner: 3 },
      $(go.Shape, new go.Binding("portId", "fromNode", function (n) { return n.portId; })
        .ofObject()),
      $(go.Shape, { toArrow: "Standard" }, new go.Binding("portId", "fromNode", function (n) { return n.portId; })
        .ofObject()));

  function samePortId(fromnode, fromport, tonode, toport) {
    console.log()
    if (fromport.portId == -1 || toport.portId == -1) {
      return false;
    }
    if (fromport.portId == 0) {
      return (fromport.portId === toport.portId) || ((fromport.portId + 1) === toport.portId) || ((fromport.portId + 2) === toport.portId);
    }
    return (fromport.portId === toport.portId);
  }
  myDiagram.toolManager.linkingTool.linkValidation = samePortId;
  myDiagram.toolManager.relinkingTool.linkValidation = samePortId;

  // Adjust sensitivity of link snapping
  myDiagram.toolManager.linkingTool.portGravity = 5;

  myDiagram.model.linkFromPortIdProperty = "fromPort";
  myDiagram.model.linkToPortIdProperty = "toPort";
}


function branchInstruction() {
  document.getElementById('branch').onclick = function () {
    refreshDiagram();
    branchInstruction();
  };

  var $ = go.GraphObject.make;
  myDiagram = $(go.Diagram, "myDiagramDiv", {
    allowHorizontalScroll: false,
    allowVerticalScroll: false,
    allowZoom: false,
    // enable undo & redo
    "undoManager.isEnabled": true
  });

  var templmap = new go.Map(); // In TypeScript you could write: new go.Map<string, go.Node>();
  // for each of the node categories, specify which template to use
  templmap.add("register", registertemplate);
  templmap.add("pc", programcountertemplate);
  templmap.add("im", imtemplate);
  templmap.add("signextend", signextendtemplate);
  templmap.add("shiftleft", shiftlefttemplate);
  templmap.add("alu", alutemplate);
  templmap.add("add", addtemplate);
  myDiagram.nodeTemplateMap = templmap;

  myDiagram.model = new go.GraphLinksModel(
    [
      { key: "Register", category: "register", loc: new go.Point(-400, 50), readreg1: 1, readreg2: 2, imfetch: 0 },
      { key: "PC", category: "pc", loc: new go.Point(-450,-100), add1: 4, addres: 7},
      { key: "IM", category: "im", loc: new go.Point(-600, 50), readreg1: 1, readreg2: 2, sein: 3, imfetch: 0 },
      { key: "SE", category: "signextend", loc: new go.Point(-310, 250), sein: 1, seout: 4 },
      { key: "Shift Left", category: "shiftleft", loc: new go.Point(-100, -40), sein: 1, seout: 4 },
      { key: "Add", category: "add", loc: new go.Point(50, -100), pcin: 7,  },
      { key: "ALU", category: "alu", loc: new go.Point(-200, 75), alu1: 2, alu2: 4, result: 5 },
    ],
  );

  myDiagram.linkTemplate =
    $(go.Link,
      { routing: go.Link.AvoidsNodes, corner: 3 },
      $(go.Shape, new go.Binding("portId", "fromNode", function (n) { return n.portId; })
        .ofObject()),
      $(go.Shape, { toArrow: "Standard" }, new go.Binding("portId", "fromNode", function (n) { return n.portId; })
        .ofObject()));

  function samePortId(fromnode, fromport, tonode, toport) {
    console.log()
    if (fromport.portId == -1 || toport.portId == -1) {
      return false;
    }
    if (fromport.portId == 0) {
      return (fromport.portId === toport.portId) || ((fromport.portId + 1) === toport.portId);// || ((fromport.portId + 2) === toport.portId);
    }
    return (fromport.portId === toport.portId);
  }
  myDiagram.toolManager.linkingTool.linkValidation = samePortId;
  myDiagram.toolManager.relinkingTool.linkValidation = samePortId;

  // Adjust sensitivity of link snapping
  myDiagram.toolManager.linkingTool.portGravity = 5;

  myDiagram.model.linkFromPortIdProperty = "fromPort";
  myDiagram.model.linkToPortIdProperty = "toPort";
}

function refreshDiagram() {
  myDiagram.div = null;
}
function indexedAddressingLoadInstruction() {
  // Allows clicking of page elements to refresh page and go to function.
  document.getElementById('indexedload').onclick = function () {
    refreshDiagram();
    indexedAddressingLoadInstruction();
  };
  var $ = go.GraphObject.make;
  myDiagram = $(go.Diagram, "myDiagramDiv", {
    // allow double-click in background to create a new node
    //"clickCreatingTool.archetypeNodeData": { text: "Node", color: "white" },

    // allow Ctrl-G to call groupSelection()
    //"commandHandler.archetypeGroupData": { text: "Group", isGroup: true, color: "blue" },

    allowHorizontalScroll: false,
    allowVerticalScroll: false,
    allowZoom: false,

    // enable undo & redo
    "undoManager.isEnabled": true
  });

  var templmap = new go.Map(); // In TypeScript you could write: new go.Map<string, go.Node>();
  // for each of the node categories, specify which template to use
  templmap.add("register", registertemplate);
  templmap.add("im", imtemplate);
  templmap.add("signextend", signextendtemplate);
  templmap.add("datamemory", datamemorytemplate);
  templmap.add("alu", alutemplate);
  myDiagram.nodeTemplateMap = templmap;

  myDiagram.model = new go.GraphLinksModel(
    [
      { key: "Register", category: "register", loc: new go.Point(-400, 50), readreg1: 1, readreg2: 2, writereg: 0, writedata: 6, readdata1: 3, readdata2: 4 },
      { key: "IM", category: "im", loc: new go.Point(-600, 50), imfetch: 0 },
      { key: "SE", category: "signextend", loc: new go.Point(-310, 250), sein: -1, seout: -1 },
      { key: "DM", category: "datamemory", loc: new go.Point(0, 50), addr: 5, writedata: -1, readdata: 6 },
      { key: "ALU", category: "alu", loc: new go.Point(-200, 75), alu1: 3, alu2: 4, result: 5 },
    ],
  );
  myDiagram.linkTemplate =
    $(go.Link,
      { routing: go.Link.AvoidsNodes, corner: 3, },
      $(go.Shape, new go.Binding("portId", "fromNode", function (n) { return n.portId; })
        .ofObject()),
      $(go.Shape, { toArrow: "Standard" }, new go.Binding("portId", "fromNode", function (n) { return n.portId; })
        .ofObject()));

  function samePortId(fromnode, fromport, tonode, toport) {
    console.log()
    if (fromport.portId == -1 || toport.portId == -1) {
      return false;
    }
    if (fromport.portId == 0) {
      return (fromport.portId === toport.portId) || ((fromport.portId + 1) === toport.portId) || ((fromport.portId + 2) === toport.portId);
    }
    return (fromport.portId === toport.portId);
  }
  myDiagram.toolManager.linkingTool.linkValidation = samePortId;
  myDiagram.toolManager.relinkingTool.linkValidation = samePortId;

  // Adjust sensitivity of link snapping
  myDiagram.toolManager.linkingTool.portGravity = 5;

  myDiagram.model.linkFromPortIdProperty = "fromPort";
  myDiagram.model.linkToPortIdProperty = "toPort";
  initialDocumentSpot: go.Spot.TopCenter; // may work, idk
}

/**
 * Notes: We can keep the model data separate the diagram's appearance.
 * The model data will be arrays of information that can be passed to each
 * diagram.
 */