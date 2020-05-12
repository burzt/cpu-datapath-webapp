var $ = go.GraphObject.make;
var registertemplate =
  // a spot is literally a spot on the shape
  $(go.Node, "Spot",
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
var datamemorytemplate =
  // a spot is literally a spot on the shape
  $(go.Node, "Spot",
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
  // a spot is literally a spot on the shape
  $(go.Node, "Spot",
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
var imtemplate =
  $(go.Node, "Spot",
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
      { key: "Register", category: "register", loc: new go.Point(-400, 50), readreg1: "1", readreg2: "0", writereg: "1", writedata: "5", readdata1: "2", readdata2: "0" },
      { key: "IM", category: "im", loc: new go.Point(-600, 50), imfetch: "1" },
      { key: "SE", category: "signextend", loc: new go.Point(-300, 250), sein: "1", seout: "3" },
      { key: "DM", category: "datamemory", loc: new go.Point(-0, 50), addr: "4", writedata: "-1", readdata: "5" },
      { key: "ALU", category: "alu", loc: new go.Point(-200, 75), alu1: "2", alu2: "3", result: "4" },
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
    return fromport.portId === toport.portId;

  }
  myDiagram.toolManager.linkingTool.linkValidation = samePortId;
  myDiagram.toolManager.relinkingTool.linkValidation = samePortId;

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
      { key: "Register", category: "register", loc: new go.Point(-400, 50) },
      { key: "IM", category: "im", loc: new go.Point(-600, 50) },
      { key: "ALU", category: "alu", loc: new go.Point(-200, 75) },
    ],
  );
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
      { key: "Register", category: "register", loc: new go.Point(-400, 50) },
      { key: "IM", category: "im", loc: new go.Point(-600, 50) },
      { key: "SE", category: "signextend", loc: new go.Point(-300, 250) },
      { key: "DM", category: "datamemory", loc: new go.Point(-0, 50) },
      { key: "ALU", category: "alu", loc: new go.Point(-200, 75) },
    ],
  );
  myDiagram.model.linkFromPortIdProperty = "fromPort";
  myDiagram.model.linkToPortIdProperty = "toPort";
}

function refreshDiagram() {
  myDiagram.div = null;
}


/**
 * Notes: We can keep the model data separate the diagram's appearance.
 * The model data will be arrays of information that can be passed to each
 * diagram.
 */