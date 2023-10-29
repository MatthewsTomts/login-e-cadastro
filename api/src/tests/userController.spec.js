function sum(a, b) {
    return a + b
}

describe("Cadastro", () => {

    test('testando o jest', () => {
        
        const result = sum(2, 8)

        expect(result).toEqual(10)
    });
})