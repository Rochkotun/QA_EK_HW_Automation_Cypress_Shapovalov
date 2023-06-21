describe('Google Search Automation', () => {
	it('Searches for "ekreative" on Google and verifies the first result', () => {
		cy.viewport('macbook-16');
		// Открытие браузера Google Chrome
		cy.visit('https://www.google.com');

		// Ввод в поле поиска
		cy.get('textarea[class="gLFyf"]').type('ekreative');

		// Нажатие на кнопку "Поиск" или клавишу Enter
		cy.get('textarea[class="gLFyf"]').type('{enter}');

		// Проверка первой ссылки в результатах поиска
		cy.get('h3.LC20lb.MBeuO.DKV0Md').first().contains('At Ekreative');

		// Клик по первой ссылке в результатах поиска
		cy.get('h3.LC20lb.MBeuO.DKV0Md').first().click();

		// Проверка изменения URL при переходе
		cy.location('href').should('eq', 'https://www.ekreative.com/');

		// Проверка наличия кнопки "We’re hiring"
		cy.contains('We’re hiring').should('be.visible');
	});
});
