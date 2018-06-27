$(document).ready(function() {
  var jobj={"FirstName":"Sagarchand",
            "LastName":"Samal",
            "Phone":"9040819543",
            "Address":"Bhubaneswar"
           }
  $("#fname").text(jobj.FirstName);
  $("#lname").text(jobj.LastName);
  $("#phn").text(jobj.Phone);
  $("#addr").text(jobj.Address);
});
