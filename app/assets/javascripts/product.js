$(document).ready(function() {
  $("a.add_product").click(function(event){
    // debugger;
		var product = $(this).attr('product_id');
    $.ajax({
      type: 'GET',
			url: '/products/new',
			success: function() {
				$( "#showtheaddedform" ).load(window.location.href + " #showtheaddedform" );
			},
			error: function(error){
				alert("error");
			}
		});
		$(this).parent().remove();
		return false;
	});
});
