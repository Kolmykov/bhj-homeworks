const products = document.querySelector('.products');
const cartProd = document.querySelector('.cart__products');

window.onload = () => {
	cartVue();
}

if (localStorage.getItem('cartItems')) {
	cartProd.innerHTML = localStorage.getItem('cartItems');
}

products.addEventListener('click', function (e) {
	const item = e.target;

	let count;
	if (item.classList.contains('product__quantity-control_dec') ||
		item.classList.contains('product__quantity-control_inc')) {
		count = item.closest('.product__quantity-controls').querySelector('.product__quantity-value');
	}
	if (item.classList.contains('product__quantity-control_dec')) {
		if (Number(count.innerText) > 1) count.innerText = --count.innerText;
	}
	if (item.classList.contains('product__quantity-control_inc')) {
		count.innerText = ++count.innerText;
	}

	if (item.classList.contains('product__add')) {
		const card = item.closest('.product');

		const productInfo = {
			id: card.dataset.id,
			img: card.querySelector('.product__image').getAttribute('src'),
			count: card.querySelector('.product__quantity-value').innerText,
		}

		const cartInPord = cartProd.querySelector(`[data-id="${productInfo.id}"`);
		if (cartInPord) {
			const countItem = cartInPord.querySelector('.cart__product-count');
			countItem.innerText = Number(countItem.innerText) + Number(productInfo.count);
		} else {
			const productHTML =
				`<div class="cart__product" data-id="${productInfo.id}">
               <img class="cart__product-image" src="${productInfo.img}">
               <div class="cart__product-count">${productInfo.count}</div>
               <div class="cart__product-remove">&times;</div>
            </div>`;
			cartProd.insertAdjacentHTML('beforeend', productHTML);
		}

		card.querySelector('.product__quantity-value').innerText = '1';
		cartVue();
		cartSave();
	};
})

cartProd.addEventListener('click', deleteProd)
function deleteProd(e) {
	const btn = e.target;
	if (btn.classList.contains('cart__product-remove')) {
		const prt = btn.closest('.cart__product');
		prt.remove();
		cartVue();
	}
	cartSave();
}

function cartVue() {
	const cartItem = cartProd.closest('.cart');
	if (cartProd.children.length === 0) {
		cartItem.classList.add('hidden');
	} else {
		cartItem.classList.remove('hidden');
	}
}

function cartSave() {
	localStorage.setItem('cartItems', cartProd.innerHTML);
}