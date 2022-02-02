# DNI

Julius Caesar the perpetual dilator used a code when he wanted to keep a message secret. The encryption consisted of substituting the first letter of the alphabet, A, for the fourth, D, and so on with the others, that is, the second, B, for the fifth, E, the third, C, for the sixth, F. ...
<br>
The Latin alphabet used by Julius Caesar consisted of 21 letters, therefore the substitution of letters to encrypt or decrypt messages was described in the following table

<table>
  <tr>
    <th>A</th> 
    <th>B</th> 
    <th>C</th> 
    <th>D</th> 
    <th>E</th> 
    <th>F</th> 
    <th>G</th> 
    <th>H</th> 
    <th>I</th> 
    <th>J</th> 
    <th>K</th> 
    <th>L</th> 
    <th>M</th> 
    <th>N</th> 
    <th>O</th> 
    <th>P</th> 
    <th>Q</th> 
    <th>R</th> 
    <th>S</th> 
    <th>T</th> 
    <th>U</th> 
    <th>V</th> 
  </tr>
  <tr>
    <td>D</td> 
    <td>E</td> 
    <td>F</td> 
    <td>G</td> 
    <td>H</td> 
    <td>I</td> 
    <td>J</td> 
    <td>K</td> 
    <td>L</td> 
    <td>M</td> 
    <td>N</td> 
    <td>O</td> 
    <td>P</td> 
    <td>Q</td> 
    <td>R</td> 
    <td>S</td> 
    <td>T</td> 
    <td>V</td> 
    <td>A</td> 
    <td>B</td> 
    <td>C</td> 
  </tr>
</table>

But we will use the spanish alphabet in this case

<table>
  <tr>
    <th>A</th> 
    <th>B</th> 
    <th>C</th> 
    <th>D</th> 
    <th>E</th> 
    <th>F</th> 
    <th>G</th> 
    <th>H</th> 
    <th>I</th> 
    <th>J</th> 
    <th>K</th> 
    <th>L</th> 
    <th>M</th> 
    <th>N</th> 
    <th>Ñ</th>
    <th>O</th> 
    <th>P</th> 
    <th>Q</th> 
    <th>R</th> 
    <th>S</th> 
    <th>T</th> 
    <th>U</th> 
    <th>V</th> 
    <th>W</th> 
    <th>X</th> 
    <th>Y</th> 
    <th>Z</th> 
  </tr>
  <tr>
    <td>D</td> 
    <td>E</td> 
    <td>F</td> 
    <td>G</td> 
    <td>H</td> 
    <td>I</td> 
    <td>J</td> 
    <td>K</td> 
    <td>L</td> 
    <td>M</td> 
    <td>N</td> 
    <td>Ñ</td> 
    <td>O</td> 
    <td>P</td> 
    <td>Q</td> 
    <td>R</td> 
    <td>S</td> 
    <td>T</td> 
    <td>V</td> 
    <td>W</td> 
    <td>X</td> 
    <td>Y</td> 
    <td>Z</td> 
    <td>A</td> 
    <td>B</td> 
    <td>C</td> 
  </tr>
</table>

To encrypt a message, for example a phrase that the emperor pronounced, "ALEA IACTA EST" (the die is cast), just look for the letter written in the first row of the previous table and write the letter that is in the row of below. The decryption procedure is the reverse; Given an encrypted message, each letter in the message is looked up in the row below and the letter in the row above is written.

<br>
Result:

<table>
  <tr>
    <th>A</th> 
    <th>L</th> 
    <th>E</th> 
    <th>A</th> 
    <th></th> 
    <th>I</th> 
    <th>A</th> 
    <th>C</th> 
    <th>T</th> 
    <th>A</th> 
    <th></th> 
    <th>E</th> 
    <th>S</th> 
    <th>T</th> 
  </tr>
  <tr>
    <td>D</td> 
    <td>O</td> 
    <td>H</td> 
    <td>D</td> 
    <td></td> 
    <td>M</td> 
    <td>D</td> 
    <td>F</td> 
    <td>A</td> 
    <td>D</td> 
    <td></td> 
    <td>H</td> 
    <td>A</td> 
    <td>B</td> 
  </tr>
</table>

This result was obtained by executing the code with the Latin alphabet, it is up to you to run it with your alphabet

<br>

This type of encryption is a substitution code, since each letter is replaced by another. More specifically, we can say that it is a rotation code, since two consecutive letters of the original alphabet correspond to two consecutive letters of the encrypted alphabet (if we consider a circular representation of the alphabet)

To run: `npm run start [-- text]`
