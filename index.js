function loadInstruction() {
  var $ = go.GraphObject.make;
  myDiagram = $(go.Diagram, "myDiagramDiv")


  myDiagram.nodeTemplate =
    // a spot is literally a spot on the shape
    $(go.Node, "Spot",
      $(go.Panel, "Auto",
        // register
        $(go.Shape, "RoundedRectangle", {
          fill: "lightblue",
          desiredSize: new go.Size(100, 150),
          //initialDocumentSpot: go.Spot.TopCenter
        }),
        $(go.TextBlock, { margin: 10 },
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
          portId: "readreg1", fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
          fromLinkable: false, toLinkable: true
        }
      ),
      // readreg2 left port
      $(go.Shape, "Ellipse",
        {
          fill: "pink",
          // puts readreg1 top left
          alignment: new go.Spot(0, 0, 0, 60),
          desiredSize: new go.Size(10, 10), //alignment: go.Spot.Left,
          portId: "readreg2", fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
          fromLinkable: false, toLinkable: true
        }
      ),
      // write register left port
      $(go.Shape, "Ellipse",
        {
          fill: "pink",
          // puts readreg1 top left
          alignment: new go.Spot(0, 0, 0, 90),
          desiredSize: new go.Size(10, 10), //alignment: go.Spot.Left,
          portId: "writereg", fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
          fromLinkable: false, toLinkable: true
        }
      ),
      // write data left port
      $(go.Shape, "Ellipse",
        {
          fill: "pink",
          // puts readreg1 top left
          alignment: new go.Spot(0, 0, 0, 120),
          desiredSize: new go.Size(10, 10), //alignment: go.Spot.Left,
          portId: "writedata", fromSpot: go.Spot.Right, toSpot: go.Spot.Left,
          fromLinkable: false, toLinkable: true
        }
      ),
      // read data1 right port
      $(go.Shape, "Ellipse",
        {
          fill: "green",
          alignment: new go.Spot(1, 0, 0, 45),
          desiredSize: new go.Size(10, 10), //alignment: go.Spot.Right,
          portId: "readdata1", fromSpot: go.Spot.Left, toSpot: go.Spot.Left,
          fromLinkable: true, toLinkable: false
        }
      ),
      // read data2 right port
      $(go.Shape, "Ellipse",
        {
          fill: "green",
          alignment: new go.Spot(1, 0, 0, 105),
          desiredSize: new go.Size(10, 10), //alignment: go.Spot.Right,
          portId: "readdata2", fromSpot: go.Spot.Left, toSpot: go.Spot.Left,
          fromLinkable: true, toLinkable: false
        }
      ),
      // $(go.TextBlock, { font: "20px sans-serif" },
      //   new go.Binding("text", "key")
      // )
    );

  myDiagram.model = new go.GraphLinksModel(
    [
      { key: "Register" },
      { key: "Beta" },
    ],
    [
      // this makes the line before the user can. Maybe we call this for the solver
      // { from: "Register", to: "Beta", fromPort: "r", toPort: "l" }
    ]
  );

  myDiagram.model.linkFromPortIdProperty = "fromPort";
  myDiagram.model.linkToPortIdProperty = "toPort";
  initialDocumentSpot: go.Spot.TopCenter; // may work, idk
}

function addInstruction() {
  var $ = go.GraphObject.make;
  diagram.add(
    $(go.Node, "Auto",
      $(go.Shape, "RoundedRectangle", { fill: "lightblue" }),
      $(go.TextBlock, "Hello!", { margin: 5 })
    ));
}

function storeInstruction() {

}

function reloadThePage(){
  window.location.reload();
} 