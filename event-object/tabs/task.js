const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach(function (tab, index) {
	tab.addEventListener('click', function () {
		tabs.forEach(function (tab) {
			tab.classList.remove('tab_active');
		});
		tabContent.forEach(function (content) {
			content.classList.remove('tab__content_active');
		});

		tab.classList.add('tab_active');
		tabContent[index].classList.add('tab__content_active');
	});
})