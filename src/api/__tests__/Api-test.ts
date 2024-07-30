import { getData } from "../Api"


describe("API Tests", () => {

    test("Test single user get call", async () => {
        const result = await getData("users/1");
        expect(result.data.website).toEqual('hildegard.org');
    })

    test("test users list is not empty", async () => {
        const result = await getData("users");
        const numberOfUsers = result.data.length;
        expect(numberOfUsers).toBeGreaterThan(0);
    })

})