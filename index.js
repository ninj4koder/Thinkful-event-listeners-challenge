

function handleInputField() {         //handles item placed into the form by the user
    $('#js-shopping-list-form').submit(function(event)  {        
        event.preventDefault();
        let listItem = ''
        listItem = $(this).find('#shopping-list-entry').val();
        $(this).find('#shopping-list-entry').val('');
        addItem(listItem);
        console.log('handleNewItems (2) function ran')
    })
}

function addItem(listItem) {     //function is called by the handleInputField function to create a string template
    let itemString = $(`<li>    
    <span class="shopping-item">${listItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`)
    $('ul.shopping-list').append(itemString);
    console.log('addItem (3) function ran')
}

function checkItem() {         //function checks items
    $('ul').on('click', 'button.shopping-item-toggle', function(event) {
        let checkItem = $(event.currentTarget).closest('li');
        $(checkItem).find('span.shopping-item').toggleClass('shopping-item__checked');
        console.log('item checked/unchecked');
      });
}



function deleteItem() {         //function deletes items
    $('ul').on('click', 'button.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
        console.log('item deleted');
      });
}


function shoppingListHandling() {
    console.log('shoppingListHandling (1) function ran')
    handleInputField();
    deleteItem();
    checkItem();
}


$(shoppingListHandling);