import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }

  lookUpHeroInSearch(name) {
    element(by.id('search-box')).sendKeys(name);
    element(by.className('search-result')).click();
  }

  getHeroNameInDetails() {
    return element(by.tagName('input')).getAttribute('value');
  }

  removeHero(heroName) {
    element(by.cssContainingText('span', heroName)).element(by.xpath('following-sibling::button')).click();
  }

  navigateToHeroDetails(id) {
    element(by.cssContainingText('.badge', id)).click().then(() => {
      element(by.cssContainingText('button','View Details')).click();
      browser.sleep(1000);
    });
  }

  modifyHeroNameInDetails(newName) {
    const inputName = element(by.tagName('input'));
    inputName.clear().then(function() {
      inputName.sendKeys(newName);
    });
    element(by.cssContainingText('button', 'Save')).click();
    browser.sleep(2000);
  }

  heroNameForId(id){
    return element(by.cssContainingText('.badge', id)).element(by.xpath('following-sibling::span')).getText();
  }
}
