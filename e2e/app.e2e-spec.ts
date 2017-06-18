import { LiveStreamMusicAppPage } from './app.po';

describe('live-stream-music-app App', () => {
  let page: LiveStreamMusicAppPage;

  beforeEach(() => {
    page = new LiveStreamMusicAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
