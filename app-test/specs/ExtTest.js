describe("Ext Assumptions", function() {
    it("has Sencha Touch 2 loaded", function() {
        expect(Ext).toBeDefined();
        expect(Ext.getVersion()).toBeTruthy();
        expect(Ext.getVersion().major).toEqual(2);
    });
});