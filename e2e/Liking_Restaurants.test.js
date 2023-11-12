Feature('Liking Restaurants');

const assert = require('assert');
const { async } = require('regenerator-runtime');

Before(({ I }) => {
  I.amOnPage('/#/favorite-resto');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('There is no favorite restaurant', '.resto-item__not__found');
});

Scenario('liking and unliking one restaurant', async ({ I }) => {
  // Skenario 1 : Menyukai Restoran
  I.see('There is no favorite restaurant', '.resto-item__not__found');
  I.amOnPage('/');

  I.seeElement('.resto-post-item-content h2 a');
  const firstResto = locate('.resto-post-item-content h2 a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite-resto');
  I.seeElement('.resto-post-item');
  const likedRestoTitle = await I.grabTextFrom('.resto-post-item-content h2');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  // Skenario 2 : Batal Menyukai Restoran
  I.seeElement('.resto-post-item-content h2 a');
  I.click('.resto-post-item-content h2 a');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite-resto');
  I.see('There is no favorite restaurant', '.resto-item__not__found');
});

Scenario('Submitting a Customer Review', ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.resto-post-item-content h2 a');

  I.click(locate('.resto-post-item-content h2 a').first());
  I.seeElement('.resto-detail__customer-review');

  I.fillField('input#customerName', 'Amelia Devasya');
  I.fillField('textarea#customerReview', 'Great food and service!');

  I.click('.resto-detail__customer-review button');

  I.see('Amelia Devasya', '.resto-detail__reviewer');
  I.see('Great food and service!', '.resto-detail__review');
});
