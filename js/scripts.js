
//the linkModifier is typically used to overwrite all input urls from the html but there may be the inverse of this function somewhere...
function linkModifier () {
  for (var i = 0; i < document.links.length, i++) {
    document.links[i].href = https://staging-pt.ispot.tv/v2/TC";
  }
}

}
//the idea is to add in what needs added in where the dashes are shown but this may require JSON and the >? is an issue.
var newURL = window.location.protocol + "/" + window.location.host + "/" + window.location.pathname;
//window.location.protocol = to access "http:"
//window.location.host = to access "css-tricks.com"
//window.location.pathname = to access "example/index.html"
var pathArray = window.location.pathname.split( "/" );
//access array indices
var secondLevelLocation = pathArray[0];

//put url back together
var newPathname = "";
for (i = 0; i < pathArray.length; i++) {
  newPathname += "/";
  newPathname += pathArray[i];
}



$(document).ready(function()){
  event.preventDefault();{

  }
}

//
// <form id="pixels" onsubmit="return false" method="post" target="_self"oninput="txtStagePixel.value = '<img src=&quot;https://staging-pt.ispot.tv/v2/TC-'+
// txtSiteId.value +'.gif?'+ 'app=' + txtApp.value + '&amp' + 'type=' + txtType.value + '&amp' + 'customdata=' +
// txtCustomData.value + '&amp' + 'cid=' + txtCId.value + '&amp' + 'refid=' + txtRefId.value + '&quot;' +
// ' style=&quot;border:0&quot; alt=&quot;&quot; />'
//
// ;txtProdPixel.value = '<img src=&quot;https://pt.ispot.tv/v2/TC-'+
// txtSiteId.value +'.gif?'+ 'app=' + txtApp.value + '&amp' + 'type=' + txtType.value + '&amp' + 'customdata=' +
// txtCustomData.value + '&amp' + 'cid=' + txtCId.value + '&amp' + 'refid=' + txtRefId.value + '&quot;' +
// ' style=&quot;border:0&quot; alt=&quot;&quot; />'">
//   siteid : <input id=siteid type="text" maxlength="6" pattern="^[0-9][0-9][0-9][0-9]-[0-9]" name="txtSiteId" placeholder="####-#" value="" onkeypress="return NoSpace(event)" required> <br><br>
//   app :

//
//
// type : <input id="type" type="text" maxlength="128 "name="txtType" placeholder="Conversion Type" onkeypress="return NoSpace(event)"> </br>
// customdata : <input id="customdata" type="text" maxlength="256" name="txtCustomData" placeholder="Custom Segment" onkeypress="return NoSpace(event)"> </br>
// cid : <input id="cid" type="text" maxlength="128" name="txtCId" placeholder="3rd Party Cookie ID" onkeypress="return NoSpace(event)"> </br>
// refid : <input id="refid" type="text" maxlength="128" name="txtRefId" onkeypress="return NoSpace(event)" </input> </br>
//
