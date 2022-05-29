import { args, formatted } from './inMemoryRepositoryStubs/replacePlaceholdersStubs'
import { replacePlaceholders } from "../src/replacePlaceholders";

describe("ReplacePlaceholder", () => {
    it("Shoud call replacePlaceholder with correct params", () => {
        const response = replacePlaceholders(formatted, args)
        expect(response).toBe('Hello lucas, how are you doing? I am doing fine.')
    })
})