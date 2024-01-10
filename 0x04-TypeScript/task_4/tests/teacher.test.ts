describe('Teacher namespace', () => {
  it('should define Teacher interface', () => {
    const testTeacher: Subjects.Teacher = {
      firstName: 'John',
      lastName: 'Doe',
    };
    expect(testTeacher).toBeDefined();
  });
});
