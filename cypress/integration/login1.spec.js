describe('Authorization Tests', () => {
  it('should log in with valid credentials', () => {
    // Переход на страницу авторизации
    cy.visit('http://webtours.load-test.ru:1090/cgi-bin/nav.pl?in=home');

    // Ввод логина
    cy.get('input[name="username"]').type('VladP');

    // Ввод пароля
    cy.get('input[name="password"]').type('1234');

    // Нажатие на кнопку входа
    cy.get('input[type="image"]').click();

    // Проверка URL после входа
    cy.url().should('include', 'nav.pl?in=home');
  });
});
