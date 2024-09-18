import React from 'react'

const AboutSection = () => {
  return (
    <section id='about'>
      <h1 className="section-heading">About Me</h1>
      <br />
      <h2>Educational Details</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Qualification</th>
              <th>Institute</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12<sup>th</sup> Commerce</td>
              <td>G.K Dholakiya Schools, Rajkot</td>
              <td>98.32 PR</td>
            </tr>
            <tr>
              <td>BSc Information Technology</td>
              <td>Atmiya University, Rajkot</td>
              <td>8.41 CGPA</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default AboutSection
