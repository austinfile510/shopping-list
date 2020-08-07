function main() {
  $("body").on("submit", "#js-shopping-list-form", function(event) {
    event.preventDefault();
      const value = event.target["shopping-list-entry"].value;
    $("ul").append(`<li>
    <span class="shopping-item">${value}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`)
  });

  $("body").on("click", ".shopping-item-toggle", function(event) {
    event.preventDefault();
    $(this).parent().parent().find(".shopping-item").toggleClass("shopping-item__checked");
  });

  $("body").on("click", ".shopping-item-delete", function(event) {
    event.preventDefault();
    $(this).parent().parent().remove();
  });
}

$(main);
