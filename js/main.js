document.addEventListener("DOMContentLoaded", function () {
  // تحديد جميع عناصر القائمة
  let menuItems = document.querySelectorAll("ul li");

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      // إزالة الكلاس 'active' من العنصر النشط حاليًا
      document.querySelector("ul li.active")?.classList.remove("active");

      // إضافة الكلاس 'active' للعنصر الذي تم الضغط عليه
      this.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let menuToggle = document.querySelector(".menu-toggle");
  let menu = document.querySelector("ul li");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

  // تفعيل زر "Active" عند الضغط على أي عنصر في القائمة
  let menuItems = document.querySelectorAll("ul li");

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      document.querySelector("ul li.active")?.classList.remove("active");
      this.classList.add("active");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let menuToggle = document.querySelector(".menu-toggle");
  let menu = document.querySelector("ul");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active"); // تفعيل وإلغاء عرض القائمة
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let menuToggle = document.querySelector(".menu-toggle");
  let menu = document.querySelector(".fa-x");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active"); // إظهار وإخفاء القائمة
    this.classList.toggle("active"); // تبديل الأيقونة
  });
});
