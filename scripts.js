const currentPage = document.body.dataset.page; // Use a `data-page` attribute to identify the current page

const subMenuItems = {
    adomas: [
        { name: "Contacts", link: "contacts.html" },
        { name: "Biography", link: "biography.html" },
        { name: "Awards, Festivals, Workshops", link: "awards.html" }
    ],
    works: [
        { name: "Plays", link: "plays.html" },
        { name: "Calendar", link: "calendar.html" }
    ],
    other: [
        { name: "Interviews", link: "interviews.html" },
        { name: "Reviews", link: "reviews.html" },
        { name: "Other projects", link: "other-projects.html" }
    ]
};

const subMenu = document.getElementById("sub-menu");
if (subMenuItems[currentPage]) {
    subMenuItems[currentPage].forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.link;
        a.textContent = item.name;
        li.appendChild(a);
        subMenu.appendChild(li);
    });
}
