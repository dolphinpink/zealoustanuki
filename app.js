var itemTemplate 	= $("#templates .item")
var list			= $("#list")
var addItemToPage = function(itemData) {
	var item = itemTemplate.clone()
	item.attr('data-id', itemData.id)
	item.find('.description').text(itemData.description)
	if(itemData.completed) {
		item.addClass('completed')
	}
	list.append(item)
}
var orange = { description: 'Orange', id: 9000, completed: false }
addItemToPage(orange)
