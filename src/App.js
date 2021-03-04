import { CardList } from './components/card-list/card-list.component';
import React, { Component } from 'react';
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component {

  constructor() {
    super();
    this.state = {
      productos: [
        {
          nombre: 'Milanesa',
          id: '1',
          precio: '$150',
          imag: 'https://lh3.googleusercontent.com/Nahr_X9G2YnGHi2y2kcelzapn7WBOO7fH0NPHhXUiLBmq96bZTfZaX8qNhswbULiyW1Y3gYvHyJyjV5UXynAtQ8Yq-l7b-xZ5PpnYrgah19Q7eb01EEIdeXf8IxJJewTOmFIeX8tcGApCsoStnUztNHqB_fyXmsvt3Umo4DV63EtJ5JbC8wtrlJFr-36rOnmsofiflKe3cH5QnGLgjwYsF4qLz-WoQUL58Ur8-P38wCkbd2cpDXule-76bETK3iIQp_sMyqyzLdc4rgAco5ajiLl-cgS7f6Mtz8SgBzFCJj-PJxCdQIz9fhcs8nCUV54SDJa9iKklRVl75CyvIRbOTG9z0GQqlwB0f2818g6h0OSu1abI9UFW1NqOYEctVnc9vVKRwgju-bCtiprz_rittoZCifRLHvGymsY6H-VenIqjAFKhwfkkwakFWeoV4v9p4fGMKBMGMuDej1_3ipAnjvDUnf-X9lgxeUQZGAEPWkmzydDmZlOt-YW1GkZ7DhtTC0bndMyTB4JUfpnTFHjEUofF_x6-xZgegMhEf8P1r4KOMz3KEd1qxJDe2OB8qmkCPR4V0EplJ4tFvRGMLNDQooO7rtyzkKho-ZlpZHmKxNv8WcS5sMnjCnzCgYKl8gpvOOLkZ4ctz_M3908T4QTpIVKYieLYBUvHw59aJ2Pn0w8agL5IxP9KMQ=w300-h168-no?authuser=0'
        },
        {
          nombre: 'Francés',
          id: '2',
          precio: '$120',
          imag: 'https://lh3.googleusercontent.com/yAn20-u79TYF5eg4mIrTT2Gl78dEn0klXE3h4JOLsJ7eaa_eSu6unQLGTF_TBSjOkgc7YLdqUkPy82zdoVJxi8Lq_q-I2uDzgDYKBj9kN5T99Z51AzB4_mEdiB2k6g1vG76zYMn8VOnaZ7wYXIfBQxtgCoG3MujaX9qR52zlCrTSd2w8e_98ubXYRcsL1qHMBe4Ex1S0nukll6RiEYEn6f-aUqv0Z7OS00HihSFZY35tCi_3CrhhZo4_mLrjUy6dkqxohgO3ce3VKoXf6ovfg_aTV27GIcCLRHwkpSk6owcg2aBB8La6QhZZiUpjnWF7LfP0b9FMlhAlNxudgR5KCPURTD32jF_UTMB8k4rAE0-xyHqwT0sOvOkaEMj3zRrfix8SWYYIZ6pmjZtp1xvkkj1arMN6RKdnCceFbkUniNY3G2NEXaDXI_4tGIHxzl3OGxaeEvAj-J6QMxSqp6Gohcj5bNdxz7SmFB68ja_uQMeltP5maJ_8Ebd8hz1-CKCdNf2WFtwu-O3i7P4nsl02xZzZ9N5_MCmjXyXtwGg_d7NDPFjE_ktx9OHpQ6dvKYEMLfEkR_EnMAb_udSDyEZi9XuIvr_NAlq-mRaRW3VLCGEnxR9qjn3CvR-iIBd2torxNQ8LNpVvqJ4qwZzgY2xIYpvR7KMuporiMFWTxFpHYEuntuwJ6fWvAD8=w300-h168-no?authuser=0'
        },
        {
          nombre: 'Arabe',
          id: '3',
          precio: '$160',
          imag: 'https://lh3.googleusercontent.com/jDI7pMBB_hsmgnwM3mLnvIqyMpDDIpXCuw_HsnsOhqnvx0lRuZUyv0r7s2ZSS2cr9PTgsrbWXzULXZ9xNGU_VZlm7xFW5V8ZBA-6WqsUxTlIqUx6QHS7_osFpDORz5Hl7mnpKKhSULLzC486v4ax9dS0DqdtzZLpL0yyZ79Jm_iof6RO8uT0yJI42Zv4dwJBeEl750QbSGnea0hC94OyVFAzS3TMm86BBfDip7XUOq3qL5Pav-mMXvwIVKOYRPsqqfmI2ITiJsuJtWqraaogAk4715LUpH85KvbBHdJAcFWWSwrJuBF53IhD5e0UMr77jQWrVrUoQzgXEF26uuV2H6_6KFsA5vnwqqTxdhdg_mQwd1gOXCbapQB3BY2Ft4fZpNtFMbx8jtBW_sI_SL_NfaqoTIybQQIByXdk_04UIQTdSohuYQC30KD28kuU84P5iAjJNQE53Fg5kBuIgTMhFlXTKoGA0YWb7h32s0fxjnlJNed2FtEIVzd2ejQawPZ-kE-cKOGqdDjRFi6YGfwAiESX8t-fh3s-L8sGOEdc3ImDOfBoRXktQXjxlIq4o4m9kUJV5Momdrb2dDI-xRmGMRu1DkGmSmHm4LvpbZnMsmkHaOTorN17bjsMtl8bZN_dUtz1-X1uQBqkrRUrclPdZXhpVZv6wgjUZsaqWjXqbDghma7MHEP7YRo=w275-h183-no?authuser=0'
        },
        {
          nombre: 'Ensalada de Frutas',
          id: '4',
          precio: '$250',
          imag: 'https://lh3.googleusercontent.com/qVwHisESmk5nYM6_2vlPFjJgiP3aH3PHC3x-oJhR0N9reyAivk6IG6RQCiBCGCI_txMCpylsNgXWRdhkJFRDKDMA8tPxf7sWZ4xkBrs39e8ASEhbbP8201vhwcCjAno5jhfovEMER0EGrGWzPmilH2ELYmDkmqkxd-_J3xQ562ZLit4VwodfDY-QwBHA6YkOghS5A2WvcZNPtxZm0FyUFbMMCv9L7tRZ7fc0hhJJNLkWhoG2b6YldXjKaOUTeqYwv9k4V3Z0Wu8PfSYxhB3_9Q66PpRKwa0xehsxsYO4R9BpFQx4ZzHG9vV1UJ07bC9xsyEHo7wAtAdVmUOKGsZES7-w5qkk--cFkIu3ChEBjzUyf_XounhD0qKDLwWKe20D9mcR9US4EjJLqpQxjVqMHl2zDCA_TjJRlAxzuUieePW5QLXl0l7MzxhmmfrEB_vPfiyp5DlJsMgJFugJx17mJv0e0h_kR5j6hpPE32_nLs4rbxDoafAzyULI-S_ddBaoBjEykmfppSptk0ay9gr743P-i_LgmnfKwIbeEAJRWRvYVEDy1bNlbF4yY8vv7-lxhLXs_IWryBb3qeRMlawMiyVF7QjULogMSGalwmZJBBsGMLcYKHi204ds7SGlsrxF89llMh9EwtNkuzr2ExYdKSrzDM9JxgE_daAhobJ1Bnq4EutGy_dsUg4=w275-h183-no?authuser=0'
        },
        {
          nombre: 'Super',
          id: '5',
          precio: '$100',
          imag: 'https://lh3.googleusercontent.com/bEW78mh7aq19J-X9CwUoI7r97yifO6Dqu1bLWrCsShZmdhJ8AMou_FrDuE--52g9T49ODWVPh3SAempUrPono9Bt9zDRexFXXCuNpw7t72_QObMTINcR7KfqTUQTBY9BrmNQdo3M3WJfUW3BSCZB7XQDIZKO-4W22XUOEaWzK7httJzC8I70aDW3hRzP2T3rz3sA7cRZnKL70YR2elHKODhwXEKdNcsAmXr1u5bLJuwW4_X1XgIUMFv0wFGeeCDjYSNNoy1BYoDV7ZhHnfjiHbACsdmZ1aOon4TGVme-ANjgbKIWA630UN3rJjbZIfZL_HVh5qyNoWeQzN__tus9TDzrJo9bLPX9lMUmwH_2nS1U1W4aDhK0WndtQJNMyOSCPyRkYdovvVcZTk3Vx1zXOhGrLG2B_lUvVlKPQFTr73EIMqqYZvnZmhBpTtmRRBy0rwYHOngg0RdlM42Rk2LcCWsKUBbJDuJGVjNt7HZO_AU1Nl0-QJr_PW8Zem2pJNDvuFlwOQhYmaY1JUGUPR5h2Zr5Xis0nJPMkfKT5IopuE38pzbSPTDwqWCN7vlOUsec3QW5JEXBkgw9ikpytu7ObNp0hlVI3vT_1I2f6v4ehmD9x9Pbm_SfPeIUZsrcXJ4Jc--6N7dxrs_X4UX-IDFQZrRy3ukx0ioADw7g5N-m4WhODiND1NKgfJY=w300-h168-no?authuser=0'
        },
        {
          nombre: 'Queso',
          id: '6',
          precio: '$110',
          imag: 'https://lh3.googleusercontent.com/aK5QmzuFeQ7S4ZdFoyF--92vVh1AJ1v8CYn6nKUTdLKBraxewSqTPJcjSBFSRlORDLW8EtPC1XqbT3slvV_rdKaG0Y4wwnVyhH0_zoelCSP_H_sQ5hEcyqkaWjUT9-rCtM8vv233ElcnPhgSj6QMzFZ73-SVfUlEgOT5hL7hGLm2XEB32jhNMCxDG9btehLC6zYBsyBrTI55wW4rUNz-X4IFcgPurxC94DhCRfvf0Zhc6BysmoD7ZVAQjZwogErMPB1R7HIkXMl7A27-X8r93IR5ePaW4XO6_uiQroPkFIEE1a0afZFro3ijUJeLC0YqGlVJ-Q-v50fCGV67HDV2Sb0OfBKW9LdMnxWy2eZFQeKAkErq93TngY6ba9EQf5Hr6BNYQs_DvL-OGD-LP37SeGtMCFNiGFavLn2Jpy-soj2XVA2HAABlT_GOFQbsCa6fwjNgYRycqKKasuUu-wxczcEhwGKoNaPFbEpEa6Bse2MPJFXtPHHVoGhlucsArcW7JxK2oQwhJnCceuAif27JNrTKalIVPbZEsTV2wCSeyzTcxtR0LzNmnvfOobEmHVDST0a_qIaV-MV2QoKhCLcZZqxCz2CmE9hCJfRzG9eRAs-jmLabyAxKO0UGTWAaEJ0dEhbnLqPoceWH1yq_lZySURMkcm_ozHWrzbl__pt5Ux29eotH7tGOwSc=w282-h179-no?authuser=0'
        },
      ],
      searchField: ''
    };
  }

  render() {
    const { productos, searchField } = this.state;
    const productosFiltrados = productos.filter(producto => 
      producto.nombre.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Sandwiches y Postres</h1>
        <SearchBox placeholder='Buscar productos'
        handleChange={e => this.setState({ searchField: e.target.value})}
        />
        <CardList productos={productosFiltrados} />
      </div>
    );
  }
}

export default App;
