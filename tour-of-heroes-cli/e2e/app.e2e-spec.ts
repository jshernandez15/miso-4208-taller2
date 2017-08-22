import { TourOfHeroesPage } from './app.po';

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });

  it('should find a hero', () => {
    const heroNames = ['Magma','Narco'];
    heroNames.map((heroName) => {
      page.navigateTo();
      page.lookUpHeroInSearch(heroName);
      expect(page.getHeroNameInDetails()).toEqual(heroName);
    });
  });
});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should add a new hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('My new Hero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });

  it('should remove a hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.removeHero('Bombasto');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n - 1));
  });
});

describe('Tour of heroes, heroes details page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should modify a hero name', () => {
    const herosToModify = [17, 15];
    herosToModify.map((id) => {
      const newName = 'newName' + id;
      page.navigateToHeroDetails(id);
      page.modifyHeroNameInDetails(newName);
      expect(page.heroNameForId(id)).toBe(newName);
    });
  });

});

describe('Tour of heroes, navigation to hero details page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
  });

  it('should navigate from dashboard', () => {
    page.navigateTo();
    const heroName = "Bombasto";
    page.navigateFromHeroOnTop(heroName);
    expect(page.getHeroNameInDetails()).toEqual(heroName);
  });

  it('should navigate from search form', () => {
    const heroName = 'Magma';
    page.navigateTo();
    page.lookUpHeroInSearch(heroName);
    expect(page.getHeroNameInDetails()).toEqual(heroName);
  });

  it('should navigate from hero list', () => {
    const hero = {
      id: 19,
      name: 'Magma'
    };
    page.navigateToHeroes();
    page.navigateToHeroDetails(hero.id);
    expect(page.getHeroNameInDetails()).toEqual(hero.name);
  });
});