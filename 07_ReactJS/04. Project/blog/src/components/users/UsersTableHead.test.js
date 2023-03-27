import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import UsersTableHead from './UsersTableHead';

const mockSort = jest.fn();
const mockPageChange = jest.fn();

it('Should show asc arrow on joined field', () => {
    render(<table><UsersTableHead /></table>);

    const elementsArr = document.querySelectorAll('i');

    const element = screen.getByTestId('createdAt').querySelector('i');

    expect(elementsArr.length).toBe(1);
    expect(element).toBeInTheDocument;
    expect(element).toHaveClass('fa-solid fa-arrow-up');
});

it('Should show desc arrow on joined field hover', async () => {
    render(<table><UsersTableHead /></table>);

    fireEvent.mouseOver(screen.getByTestId('createdAt'));

    await waitFor(() => {
        const elementsArr = document.querySelectorAll('i');
        const element = screen.getByTestId('createdAt').querySelector('i');

        expect(elementsArr.length).toBe(1);
        expect(element).toBeInTheDocument;
        expect(element).toHaveClass('fa-solid fa-arrow-down');
    });

});

it('Should correctly show arrow after mouse enter and mouse out', async () => {
    render(<table><UsersTableHead /></table>);

    fireEvent.mouseOver(screen.getByTestId('createdAt'));

    await waitFor(() => {
        const elementsArr = document.querySelectorAll('i');
        const element = screen.getByTestId('createdAt').querySelector('i');

        expect(elementsArr.length).toBe(1);
        expect(element).toBeInTheDocument;
        expect(element).toHaveClass('fa-solid fa-arrow-down');
    });

    fireEvent.mouseOut(screen.getByTestId('createdAt'));

    await waitFor(() => {
        const elementsArr = document.querySelectorAll('i');
        const element = screen.getByTestId('createdAt').querySelector('i');

        expect(elementsArr.length).toBe(1);
        expect(element).toBeInTheDocument;
        expect(element).toHaveClass('fa-solid fa-arrow-up');
    });

});

it('Should show asc arrow on field hovered while joined field arrow is visible', async () => {
    render(<table><UsersTableHead /></table>);

    fireEvent.mouseOver(screen.getByTestId('email'));

    await waitFor(() => {
        const elementsArr = document.querySelectorAll('i');
        const hoveredElement = screen.getByTestId('email').querySelector('i');
        const element = screen.getByTestId('createdAt').querySelector('i');

        expect(elementsArr.length).toBe(2);
        expect(element).toBeInTheDocument;
        expect(hoveredElement).toBeInTheDocument;
        expect(element).toHaveClass('fa-solid fa-arrow-up');
        expect(hoveredElement).toHaveClass('fa-solid fa-arrow-up');
    });

});

it('Should correctly change sorting field display', async () => {
    render(<table><UsersTableHead sortUsers={mockSort} pageChangeHandler={mockPageChange} /></table>);

    fireEvent.mouseOver(screen.getByTestId('lastName'));
    fireEvent.click(await screen.findByTestId('lastName'));

    const elementsArr = document.querySelectorAll('i');
    const clickedElement = screen.getByTestId('lastName').querySelector('i');
    const element = screen.getByTestId('createdAt').querySelector('i');

    expect(mockSort.mock.calls).toHaveLength(1);
    expect(mockPageChange.mock.calls).toHaveLength(1);
    expect(elementsArr.length).toBe(1);
    expect(element).not.toBeInTheDocument;
    expect(clickedElement).toBeInTheDocument;
    expect(clickedElement).toHaveClass('fa-solid fa-arrow-up');

});

it('Should correctly change sorting field display after double click and mouse out', async () => {
    render(<table><UsersTableHead sortUsers={mockSort} pageChangeHandler={mockPageChange} /></table>);

    fireEvent.mouseOver(screen.getByTestId('lastName'));
    fireEvent.click(await screen.findByTestId('lastName'));
    fireEvent.click(await screen.findByTestId('lastName'));
    fireEvent.mouseOut(await screen.findByTestId('lastName'));

    const elementsArr = document.querySelectorAll('i');
    const clickedElement = screen.getByTestId('lastName').querySelector('i');

    expect(mockSort.mock.calls).toHaveLength(2);
    expect(mockPageChange.mock.calls).toHaveLength(2);
    expect(elementsArr.length).toBe(1);
    expect(clickedElement).toBeInTheDocument;
    expect(clickedElement).toHaveClass('fa-solid fa-arrow-down');

});