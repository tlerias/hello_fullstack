<style>
  table { border-collapse: collapse; }
  td, th { border: 1px solid black; padding: 3px 8px; }
  th { text-align: left; }
</style>

<script>
  function buildTable(data) {
    var tbl = document.createElement("table");
    var tr = document.createElement("tr");

	for (var i = 0; i < data.length; i++)
      
	{
      	var th = document.createElement()

		th.appendChild(document.createTextNode(i))
		tr.appendChild(th)

	
			for (var j = 0; j < data.length; j++)
			{
				document.createElement("td")
				td.appendChild(document.createTextNode(data[j]))
				th.appendChild(td)
			}
	}

	return tbl.appendChild(tr);
  }

  document.body.appendChild(buildTable(MOUNTAINS));
</script>

i'm not iterating through the array correctly for the first one. 
I need to grab the keys and put it into th.