import { test } from 'qunit';
import moduleForAcceptance from 'ember-blessed1/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | chat');

test('should link to chat.', function (assert) {
  visit('/');
  click('a:contains("Chat")');
  andThen(function () {
    assert.equal(currentURL(), '/chat', 'should navigate to chat');
  });
});
