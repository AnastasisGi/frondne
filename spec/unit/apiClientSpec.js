describe('An API call', () => {

    it('is made with the correct call', () => {

        spyOn(window,"fetch");
        let client = new ApiClient();
        client.getThePosts();
        expect(window.fetch).toHaveBeenCalledWith("https://chitter-backend-api-v2.herokuapp.com/peeps")
        
    });
  ;
});
