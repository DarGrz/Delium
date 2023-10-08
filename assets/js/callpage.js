document.addEventListener("click", function handleClick(event) {
  const callNow = event.target.classList.contains("call-now");
  const callLater = event.target.classList.contains("call-later");
  const leaveMessage = event.target.classList.contains("leave-message");
  const bookMeetig = event.target.classList.contains("book-meeting");

  if (callNow) {
    document.querySelector(".callpage-widget-title").innerHTML =
      "<h3>Chesz żebym do Ciebie oddzwonił w 5 minut za darmo</h3>";

    document.querySelector(
      ".callpage-widget-form"
    ).innerHTML = `<form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D06000001aPRw" method="POST">
    <input type=hidden name="oid" value="00D06000001aPRw">
    <input required type=hidden name="retURL" value="http://delium.pl">
    <div class="input-fields">
        <input  id="phone" maxlength="40" name="phone" size="20" type="text" placeholder="+48 501 763 853"/><br>
        <input class="form-submit-btn" type="submit" name="submit" value="Zadzwoń do mnie teraz">
    </div>
</form>`;
  } else if (callLater) {
    document.querySelector(".callpage-widget-title").innerHTML =
      "<h3>Chesz żebym do Ciebie zadzwonił później za darmo</h3>";

    document.querySelector(
      ".callpage-widget-form"
    ).innerHTML = `<form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D06000001aPRw" method="POST">
      <input type=hidden name="oid" value="00D06000001aPRw">
      <input type=hidden name="retURL" value="http://delium.pl">
      <div class="input-fields">
          <input required  id="phone" maxlength="40" name="phone" size="20" type="text" placeholder="+48 501 763 853"/><br>
          <input class="form-submit-btn" type="submit" name="submit" value="Zadzwoń do mnie teraz">
      </div>
  </form>`;
  } else if (leaveMessage) {
    document.querySelector(".callpage-widget-title").innerHTML =
      "<h3>Napisz do mnie a odezwę się najszybciej jak mogę</h3>";

    document.querySelector(
      ".callpage-widget-form"
    ).innerHTML = `<a href="tel:501767999"><h4>kontakt@delium.pl</h4></a>`;
  } else if (bookMeetig) {
    document.querySelector(".callpage-widget-title").innerHTML =
      "<h3>Umów spotkanie</h3>";

    document.querySelector(
      ".callpage-widget-form"
    ).innerHTML = `<a href="https://calendly.com/grzegorczyk" target=”_blank”><h4>Sprawdź dostępne terminy</h4></a>`;
  }
});
