let assert = chai.assert;
describe('Krug', function() {
 describe('#povrsina kruga', function() {
   it('treba vratiti PI kada je prečnik kruga 2', function() {
       const k1= new Krug(1,1,2);
       assert.equal(k1.povrsina, Math.PI);
   });
   it('treba vratiti 0 kada je prečnik kruga 0', function() {
     const k1= new Krug(1,1,0);
     assert.equal(k1.povrsina, 0);
   });
   it('treba vratiti 4PI kada je prečnik kruga 4', function() {
     const k1= new Krug(1,1,4);
     assert.equal(k1.povrsina, 4*Math.PI);
   });

//implementirani testovi za obim kruga
   describe('#obim kruga', function(){
    it('treba vratiti 0 kada je precnik kruga 0', function(){
        const k1=new Krug(0, 0, 0);
        assert.equal(k1.obim, 0);
    });
   it('treba vratiti PI kada je precnik kruga 1', function(){
    const k1=new Krug(1,1,1);
    assert.equal(k1.obim, Math.PI);
   });
   it('treba vratiti 7PI kada je precnik kruga 4', function(){
    const k1=new Krug(1, 6, 7);
    assert.equal(k1.obim, 7*Math.PI);
   });

//presjek krugas
   describe('#presjek kruga', function(){
    it('treba vratiti 0 kada je precnik 0', function(){
        const k1=new Krug(0,0,0);
        assert.equal(k1.obim,0);
    });
   });
 });
 });

});

