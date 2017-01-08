import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

const DUMMY_ELEMENT = {};

let MapsUtilStub = Ember.Object.extend({
  createMap(element, location) {
    this.assert.ok(element, 'createMap called with element');
    this.assert.ok(location, 'createMap called with location');
    return DUMMY_ELEMENT;
  }
});

moduleFor('service:maps', 'Unit | Service | maps', {
  // Specify the other units that are required for this test.
  needs: ['service:google-maps']
});

// Replace this with your real tests.
test('should create a new map if one isn\'t cached for location', function(assert) {
  assert.expect(4);
  let stubMapUtil = MapsUtilStub.create({ assert });
  let mapService = this.subject({ mapUtil: stubMapUtil });
  let element = mapService.getMapElement('San Fransisco');
  assert.ok(element, 'element exists');
  assert.equal(element.className, 'map', 'element has class name of map');
});

test('should use existing map if one is cached for location', function(assert) {
  assert.expect(1);
  let stubCachedMaps = Ember.Object.create({
    sanFransisco: DUMMY_ELEMENT
  });
  let mapService = this.subject({ cachedMaps: stubCachedMaps });
  let element = mapService.getMapElement('San Fransisco');
  assert.equal(element, DUMMY_ELEMENT, 'element fetched from cache');
});