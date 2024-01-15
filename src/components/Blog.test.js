import React from 'react'
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Blog from './Blog';

test('render blog contains title and author, but no url or likes', () => {
    const blog = {
        title: 'New blog',
        author: 'Klee',
        url: 'http://klee.com',
        likes: 50,
        user: {
            username: "crimson",
            name: "Klee"
        }
    }

    const user = {name: "Klee"}

    const component = render(
        <Blog blog={blog} user={user} />
    )

    const div = component.container.querySelector('.blog')

    expect(div).toHaveTextContent('New blog');
    expect(div).toHaveTextContent("Klee");
    expect(div).not.toHaveTextContent("http://klee.com");
    expect(div).not.toHaveTextContent("50");
})