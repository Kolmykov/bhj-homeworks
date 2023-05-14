const book = document.getElementById('book');
const fontSize = document.querySelectorAll('.font-size');
const bookTextColor = document.querySelectorAll('.book__control_color .color');
const bookBackgroundColor = document.querySelectorAll('.book__control_background .color');

fontSize.forEach(function (fontS) {
	fontS.addEventListener('click', function (event) {
		event.preventDefault();

		fontSize.forEach(function (fontS) {
			fontS.classList.remove('font-size_active');
		});
		this.classList.add('font-size_active');

		book.classList.toggle('book_fs-small',
			this.classList.contains('font-size_small'));

		book.classList.toggle('book_fs-big',
			this.classList.contains('font-size_big'));
	});
});

bookTextColor.forEach(function (textColor) {
	textColor.addEventListener('click', function (event) {
		event.preventDefault();

		bookTextColor.forEach(function (textColor) {
			textColor.classList.remove('color_active');
		});
		console.log(this);
		this.classList.add('color_active');

		book.classList.toggle('book_color-black',
			this.classList.contains('text_color_black'));

		book.classList.toggle('book_color-gray',
			this.classList.contains('text_color_gray'));

		book.classList.toggle('book_color-whitesmoke',
			this.classList.contains('text_color_whitesmoke'));
	});
});

bookBackgroundColor.forEach(function (backgroundColor) {
	backgroundColor.addEventListener('click', function (event) {
		event.preventDefault();

		bookBackgroundColor.forEach(function (backgroundColor) {
			backgroundColor.classList.remove('font-size_active');
		});
		this.classList.add('color_active');

		book.classList.toggle('bg_color_black',
			this.classList.contains('bg_color_black'));

		book.classList.toggle('bg_color_gray',
			this.classList.contains('bg_color_gray'));

		book.classList.toggle('bg_color_white',
			this.classList.contains('bg_color_white'));
	});
});