const rotatorCases = document.querySelectorAll('.rotator__case');
let currRotatorCase = 0;

function changeCase(cases) {
	setInterval(() => {
		cases[currRotatorCase].classList.remove('rotator__case_active');

		if (currRotatorCase === cases.length - 1) {
			currRotatorCase = 0;
		} else {
			currRotatorCase++;
		}

		cases[currRotatorCase].classList.add('rotator__case_active');
		cases[currRotatorCase].style.color = cases[currRotatorCase].dataset.color;
	}, 1000);
}
changeCase(rotatorCases);