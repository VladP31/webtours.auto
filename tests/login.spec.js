describe('Authorization Tests', () => {
  it('should log in with valid credentials', () => {
    // Переход на страницу авторизации
    cy.visit('http://webtours.load-test.ru:1090/WebTours/');

    // Ввод логина
    cy.get('input[name="Login"]').type('VladP');

    // Ввод пароля
    cy.get('input[name="password"]').type('1234');

    // Нажатие на кнопку входа
    cy.get('input[type="submit"]').click();

    // Проверка, что пользователь успешно вошел в систему
    // Здесь нужно указать элемент, который появляется после успешного входа
    cy.url().should('include', 'http://webtours.load-test.ru:1090/cgi-bin/login.pl'); // Замените на правильный URL после входа
    cy.get('.welcome-message').should('contain', 'Welcome, VladP, to the Web Tours reservation pages.'); // Замените на правильный селектор и текст
  });
